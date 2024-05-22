import React from 'react';
import './Header.css'
import Logo from '../../media/logo.webp'
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
const Header = () => {
const [cookies,setCookies,removeCookies] = useCookies(['TOKEN','NAME'])
  return (
    <div class="header">
    <div class="header_section">
        <a><div class="header_logo"><Link to="/clientpage"><img src={Logo} alt="logo"/></Link></div></a>
    </div>
    <div class="header_section">
        {cookies.NAME=='admin@admin.com' ? (
          <>
          <div class="header_item header_button"><p class="text_button"><Link className='header_button_link' to="/addorderpage">Назначить заказ</Link></p></div>
          <div class="header_item header_button"><p class="text_button"><Link className='header_button_link' to="/neworderspage">Поступившие заказы</Link></p></div>
          <div class="header_item header_button"><p class="text_button"><Link className='header_button_link' to="/storagepage">Склад</Link></p></div>
          <div class="header_item header_button"><p class="text_button"><Link className='header_button_link' onClick={() => {removeCookies('TOKEN'); removeCookies('NAME')}} to="/clientpage">Выйти</Link></p></div>
          </>
        ) :cookies.TOKEN ? (
          <>
          <div class="header_item header_button"><p class="text_button"><Link className='header_button_link' to="/orders">Заказы</Link></p></div>
          <div class="header_item header_button"><p class="text_button"><Link className='header_button_link' to="/storagepage">Склад</Link></p></div>
          <div class="header_item header_button"><p class="text_button"><Link className='header_button_link' onClick={() => {removeCookies('TOKEN'); removeCookies('NAME')}} to="/clientpage">Выйти</Link></p></div>
          </>
        ) :  (
          <>
          <div class="header_item header_button"><p class="text_button"><Link className='header_button_link' to="/clientpage">Главная</Link></p></div>
          <div class="header_item header_button"><p class="text_button"><Link className='header_button_link' to="/leaveorderpage">Оставить заказ</Link></p></div>
          <div class="header_item header_button"><p class="text_button"><Link className='header_button_link' to="/checkstatuspage">Статус заказа</Link></p></div>
          <div class="header_item header_button"><p class="text_button"><Link className='header_button_link' to="/login">Войти</Link></p></div>
          </>
        )}
    </div>
</div>
  );
}

export default Header;