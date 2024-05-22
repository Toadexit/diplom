import React, { useState } from 'react'
import Title from 'components/Title/Title'
import { collection, getDocs, deleteDoc, doc, query, where} from 'firebase/firestore';
import { db } from '../../firebase';
function CheckStatus() {

    const [statusData, setStatusData] = useState('')
    const [orderNumber, setOrderNumber] = useState('')
    const check_status = async () => {
        const docRef = collection(db, 'orders')
        const q = query(docRef, where('order_number', '==' , orderNumber))
              const docs = await getDocs(q)
              docs.forEach((doc) => {setStatusData(doc.data().status.label)})
              
      }
      
console.log(statusData)
  return (
    <>
        <Title title={'Проверить статус заказа'}/>
        <input type="text" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} />
        <button onClick={() => check_status()}>Проверить</button>
        <div>{statusData}</div>

    </>
  )
}

export default CheckStatus