import React from 'react';
import './Footer.css'
import tg from '../../media/telegram.svg'
import vk from '../../media/vk.svg'
import ds from '../../media/discord.svg'
import yt from '../../media/youtube.svg'
import yx from '../../media/yandex.svg'
import cr from '../../media/copyright.png'
const Footer = () => {
  return (
    <div class="footer">
    <div class="container">
        <div class="footer_links">
            <a href="#" class="footer_links-item"><img src={vk} alt="vk"/></a>
            <a href="#" class="footer_links-item"><img src={tg} alt="tg"/></a>
            <a href="#" class="footer_links-item"><img src={ds} alt="ds"/></a>
            <a href="#" class="footer_links-item"><img src={yx} alt="yx"/></a>
            <a href="#" class="footer_links-item"><img src={yt} alt="yt"/></a>
        </div>
        <div class="line"></div>
        <div class="footer_copyright">
            <img class="copyright_icon" src={cr} alt="cr"/>
            <div class="copyright">Даниил Кузнецов</div>
        </div>
        
    </div>
</div>
  );
}

export default Footer;