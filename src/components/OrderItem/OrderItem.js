
import { useEffect, useState } from 'react';
import './OrderItem.css';
import { updateDoc, doc} from 'firebase/firestore';
import { db } from '../../firebase';
import Select from 'react-select';

const OrderItem = ({order, deleteOrder}) => {
const {order_number, master_name, problems, status} = order.data
const options = [
    {value: 'not started', label: 'Не начат'},
    {value: 'in progress', label: 'В процессе'},
    {value: 'need details', label: 'Нужны детали'},
    {value: 'ready', label: 'Готов'},

]
const [handleStatus, setHandleStatus] = useState(status)
const update = () => {
    const docRef = doc(db, 'orders', order.id)
    updateDoc(docRef, {status:handleStatus})
}
useEffect(() => {
    update()
}, [handleStatus])

    return (
        <div className='order_item'>
            <h2>Заказ № {order_number}</h2>
            <p>ФИО мастера: {master_name}</p>
            <p>Неполадки: {problems}</p>
            <button className="order-item-button" onClick={()=>deleteOrder(order.id)}>Завершить</button>
            <Select placeholder='Выберите статус заказа' onChange={(value)=> setHandleStatus(value)} options={options} value={handleStatus}/>
        </div>
    );
};

export default OrderItem;