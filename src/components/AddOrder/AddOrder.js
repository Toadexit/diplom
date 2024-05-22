import React,{useState} from 'react'
import { db } from '../../firebase';
import {collection, getDocs, addDoc, doc} from 'firebase/firestore';
import './AddOrder.css';

function AddOrder() {

    const [master_name, setFIO] = useState('')
    const [problems, setIssues] = useState('')
    const [budget, setBudget] = useState('')
    const addOrder = () => {
        const ordersCollRef = collection(db, 'orders')
    addDoc(ordersCollRef, {master_name: master_name, order_number: String(Math.floor(Math.random() * (1000000-1)) + 1), problems: problems, budget: budget, status: {value: 'not started', label: 'Не начат'}})
    }
    
    
  return (
    <>
        <div className="OrderContainer">
            <input onChange={e => setFIO(e.target.value)} type="text" value={master_name} placeholder='Введите ФИО мастера'/>
            <input onChange={e => setIssues(e.target.value)} type="text" value={problems} placeholder='Введите неисправности'/>
            <input onChange={e => setBudget(e.target.value)} type="text" value={budget} placeholder='Введите бюджет'/>
            <button onClick={addOrder}>Создать</button>
        </div>
    </>
  )
}

export default AddOrder