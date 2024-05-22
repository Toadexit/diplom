import React from 'react'
import '../NewOrders/NewOrders.css';
import { doc, deleteDoc, collection, addDoc} from 'firebase/firestore';
import { db } from '../../firebase';
import { useState } from 'react';


  const NewOrders = ({leaved_order, deleteLeavedOrder, setLeavedOrders}) => {
  const {budget, descr, email, name, phone} = leaved_order.data
  const [FIO, setFIO] = useState('')

  const addOrder = () => {
    const ordersCollRef = collection(db, 'orders')
addDoc(ordersCollRef, {master_name: FIO, order_number: String(Math.floor(Math.random() * (1000000-1)) + 1), problems: descr, budget: budget , status: {value: 'not started', label: 'Не начат'}})
    .then(response => {
        deleteLeavedOrder(leaved_order.id)
    })
    .catch(error => {
        console.log(error.message)
    })
}
  
  return (
    <div className='new_order_item'>
      <h2>Заказ от {name}</h2>
      <p className='new_order__text_field'>Телефон: {phone}</p>
      <p className='new_order__text_field'>Email: {email}</p>
      <p className='new_order__text_field'>Бюджет: {budget} руб.</p>
      <p className='new_order__text_field'>Неисправность: {descr}</p>
      <input onChange={e => setFIO(e.target.value)} value={FIO} placeholder='Введите ФИО Мастера'/>
      <button className='new_order_item_button_success' onClick={()=>(addOrder())}>Назначить</button>
      <button className='new_order_item_button_cancel' onClick={()=>(deleteLeavedOrder(leaved_order.id))}>Отменить</button>
    </div>
  )
}

export default NewOrders