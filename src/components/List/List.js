import React from 'react'
import '../List/List.css'

function List() {
  return (
    <div className='list'>
        <p className='name'>Наименование</p>
        <p className='amount'>Количество</p>
        <p className='adress'>Адрес</p>
    </div>
  )
}

export default List