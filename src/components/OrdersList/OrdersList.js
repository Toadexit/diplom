import React from 'react'
import './OrdersList.css'
import OrderItem from '../OrderItem/OrderItem'

function OrdersList({orders, deleteOrder}) {
    const elements = orders.map((item) => (
        <OrderItem order={item} deleteOrder={deleteOrder} key={item.id}/>
    ))

  return (
    <div className="orders-container">
        {elements}

    </div>
  )
}

export default OrdersList