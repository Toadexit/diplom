import React from 'react'
import '../Sidebar/Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
        <ul class="sidebar_section">
            <li class="sidebar_item"><a className='side_text'>Главная</a></li>
            <li class="sidebar_item"><a className='side_text'>Каталог услуг</a></li>
            <li class="sidebar_item"><a className='side_text'>Галерея</a></li>
            <li class="sidebar_item"><a className='side_text'>О нас</a></li>
            <li class="sidebar_item"><a className='side_text'>Заказать ремонт</a></li>
            <li class="sidebar_item"><a className='side_text'>Форум</a></li>
        </ul>
    </div>
  )
}

export default Sidebar