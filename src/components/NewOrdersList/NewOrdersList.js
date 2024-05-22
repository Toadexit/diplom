import React from 'react'
import '../NewOrdersList/NewOrdersList.css'
import NewOrders from 'components/NewOrders/NewOrders'

function NewOrdersList({leaved_orders, deleteLeavedOrder, setLeavedOrders}) {
    const elements = leaved_orders.map((item) => (
        <NewOrders leaved_order={item} deleteLeavedOrder={deleteLeavedOrder} setLeavedOrders={setLeavedOrders} key={item.id}/>
        
    ))
  return (
    <div className='new_orders_container'>
        {elements}
    </div>
  )
}

export default NewOrdersList