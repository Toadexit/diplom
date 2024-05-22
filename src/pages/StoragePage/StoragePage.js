import StorageList from 'components/StorageList/StorageList';
import Title from 'components/Title/Title';
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import List from 'components/List/List';
import { useCookies } from 'react-cookie';
import AdminStorage from 'components/AdminStorage/AdminStorage';

function StoragePage() {

    const [storage, setStorage] = useState([])
    const [cookies] = useCookies(['NAME'])

      function getStorage() {
        const storageCollectionRef = collection(db, 'storage')
        getDocs(storageCollectionRef)
            .then(response => {
                const storage = response.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id,
                }))
                setStorage(storage)
            })
            .catch(error => console.log(error.message))
      }

      const deleteStorage = (id) => {
        const docRef = doc(db, 'storage', id)
        deleteDoc(docRef)
          .then(() => setStorage([...storage.filter((item)=>item.id !== id)]))
          .catch(error => console.log(error.message))
      }

        useEffect(() =>{
            getStorage()
        }, [])

  return (
    <>
        <Title title = 'Позиции на складе'/>
        {cookies.NAME === 'admin@admin.com' && <AdminStorage/>}
        <List/>
        <StorageList storage={storage} deleteStorage={deleteStorage}/>
    </>
  )
}

export default StoragePage
