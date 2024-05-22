import React from 'react'
import StorageItem from 'components/StorageItem/StorageItem'

function StorageList({storage, deleteStorage}) {
    const elements = storage.map((item) => (
        <StorageItem storage={item} deleteStorage={deleteStorage} key={item.id}/>
    ))

  return (
    <div className="storage-container">
        {elements}
    </div>
  )
}

export default StorageList