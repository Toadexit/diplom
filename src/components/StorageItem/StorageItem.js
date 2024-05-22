import React from 'react'
import '../StorageItem/StorageItem.css'
import bin from '../../media/bin-svgrepo-com.svg'

const StorageItem = ({storage, deleteStorage}) => {
const {amount, item, location} = storage.data




return (
    <div className="storage_item">
        <p className='item_field'>{item}</p>
        <p className='amount_field'>{amount} шт</p>
        <p className='location_field'>{location}</p>
        <div className='storage_item_button' onClick={()=>deleteStorage(storage.id)}><img style={{width:'30px'}}src={bin}/></div>
    </div>
)
}

export default StorageItem