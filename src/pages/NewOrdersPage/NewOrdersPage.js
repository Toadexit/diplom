import React, { useEffect, useState } from 'react'
import Title from 'components/Title/Title'
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore'
import { db } from '../../firebase'
import NewOrdersList from 'components/NewOrdersList/NewOrdersList'
function NewOrdersPage() {

  const [leaved_orders, setLeavedOrders] = useState([])

   function getLeavedOrders() {
      const leaved_ordersCollectionRef = collection(db, 'leaved_orders')
      getDocs(leaved_ordersCollectionRef)
        .then(response => {
          const leaved_orders = response.docs.map(doc => ({
            data: doc.data(),
            id: doc.id,
          }))
          setLeavedOrders(leaved_orders)
        })
        .catch(error => console.log(error.message))
   }

   const deleteLeavedOrder = (id) => {
    const docRef = doc(db, 'leaved_orders', id)
    deleteDoc(docRef)
      .then(() => setLeavedOrders([...leaved_orders.filter((item)=>item.id !== id)]))
      .catch(error => console.log(error.message))
   }

   useEffect(() => {
    getLeavedOrders()
   }, [])
  return (
    <>
        <Title title={'Поступившие заказы'}/>
        <NewOrdersList leaved_orders={leaved_orders} setLeavedOrders={setLeavedOrders} deleteLeavedOrder={deleteLeavedOrder}/>
    </>
  )
}

export default NewOrdersPage