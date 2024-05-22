import React from 'react'
import '../LeaveOrder/LeaveOrder.css'
import { useState } from 'react'
import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
function LeaveOrder() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [budget, setBudget] = useState('')
    const [descr, setDescr] = useState('')
    const leaveOrder = () => {
        const leaveorderCollRef = collection(db, 'leaved_orders')
    addDoc(leaveorderCollRef, {name: name, phone: phone, email: email, budget: budget, descr: descr})
    }
  return (
    <div class="content_order">
            <div class="title_order">Обратная связь HappyPC</div>
            <div class="descr_order">Оставьте заявку и мы свяжемся с вами</div>
            <div class="form_order">
                <input class="form_input_order" onChange={e => setName(e.target.value)} type="text" value={name} placeholder="Имя"/>
                <input class="form_input_order" onChange={e => setPhone(e.target.value)} type="text" value={phone} placeholder="Телефон"/>
                <input class="form_input_order" onChange={e => setEmail(e.target.value)} type="text" value={email} placeholder="E-mail"/>
                <input class="form_input_order" onChange={e => setBudget(e.target.value)} type="text" value={budget} placeholder="Бюджет"/>
                <input class="form_input_order" onChange={e => setDescr(e.target.value)} type="text" value={descr} placeholder="Опишите вашу проблему"/>
                <button class="form_button_order" onClick={leaveOrder}>Отправить</button>
            </div>
    </div> 
  )
}

export default LeaveOrder