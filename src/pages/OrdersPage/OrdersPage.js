import React, { useEffect, useState } from 'react';
import Title from '../../components/Title/Title'
import OrdersList from '../../components/OrdersList/OrdersList'
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc, query, where} from 'firebase/firestore';
import { Redirect } from 'react-router-dom';


function OrdersPage() {

  const [orders, setOrders] = useState([])

    function getOrders() {
        const ordersCollectionRef = collection(db, 'orders')
        getDocs(ordersCollectionRef)
            .then(response => {
                const orders = response.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id,
                }))
                setOrders(orders)
            })
            .catch(error => console.log(error.message))
    }

    const deleteOrder = (id) => {
      const docRef = doc(db, 'orders', id)
      deleteDoc(docRef)
        .then(() => setOrders([...orders.filter((item)=>item.id !== id)]))
        .catch(error => console.log(error.message))
    
  }

    
    useEffect(() => {
        getOrders()
      }, [])

  return (
    <>
      <Title title='Заказы'/>
      <OrdersList orders={orders} deleteOrder={deleteOrder}/>
      
    </>
    
  )
}

export default OrdersPage