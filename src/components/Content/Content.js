import React from 'react'
import '../Content/Content.css'
import repair from '../../media/repair.svg'
import upgrade from '../../media/upgrade.svg'
import sborka from '../../media/sborka.svg'
import search from '../../media/search.svg'
import { Link } from 'react-router-dom'
import Title from 'components/Title/Title'

function Content() {
  return (
    <div class="content">
        <div class="hat_photo">
            <div class="head_title">Добро пожаловать в мастерскую HappyPC</div>
            <div class="hat_overlay"></div>
        </div>
        <div class="main">
            <Title title={'Простые решения для сложных задач'}/>
            <div class="service_box">
                <div class="info_box"> <img class="info_photo" src={repair} alt="repair"/>
                    <div class="text_box">
                        <p class="text_first">Ремонт компьютера</p>
                    <p class="text_second">Что входит в стоимость?</p>
                    <p class="text_third">Диагностика устройства</p>
                    <p class="text_third">Консультация по ремонту компьютера</p>
                    <p class="text_third">Чистка и профилкатика устройства</p>
                    <p class="text_third">Замена комплектующих и устранение неисправностей вашего устройства</p>
                    </div>
                    <a><Link className='info_box__button' to="/leaveorderpage">Заказать</Link></a>
                </div>
                <div class="info_box"><img class="info_photo" src={sborka} alt="sborka"/>
                    <div class="text_box">
                        <p class="text_first">Сборка компьютера</p>
                    <p class="text_second">Что входит в стоимость?</p>
                    <p class="text_third">Проверка и подбор комплектующих</p>
                    <p class="text_third">Грамотная установка комплектующих в корпус</p>
                    <p class="text_third">Аккуратный кабель-менеджмент</p>
                    <p class="text_third">Настройка BIOS</p>
                    <p class="text_third">Установка ОС</p>
                    </div>
                    <a><Link className='info_box__button' to="/leaveorderpage">Заказать</Link></a>
                </div>
                <div class="info_box"><img class="info_photo" src={upgrade} alt="upgrade"/>
                    <div class="text_box">
                        <p class="text_first">Апгрейд компьютера</p>
                    <p class="text_second">Что входит в стоимость?</p>
                    <p class="text_third">Оценка и анализ возможности апгрейда</p>
                    <p class="text_third">Подбор комплектующих под ваш бюджет</p>
                    <p class="text_third">Работы по апгрейду комплектующих</p>
                    <p class="text_third">Стресс-тесты обновленного ПК</p>
                    </div>
                    <a><Link className='info_box__button' to="/leaveorderpage">Заказать</Link></a>
                </div>
                <div class="info_box"><img class="info_photo" src={search} alt="search"/>
                    <div class="text_box">
                        <p class="text_first">Подбор запчастей</p>
                    <p class="text_second">Что входит в стоимость?</p>
                    <p class="text_third">Учтем ваши пожелания</p>
                    <p class="text_third">Добавим к ним нашу экспертизу по вопросам совместимости и соотношению цена/качество</p>
                    <p class="text_third">Предложим оптимальную конфигурацию компьюетра</p>
                    <p class="text_third">Предоставим проффесиональную консультацию</p>
                    </div>
                    <a><Link className='info_box__button' to="/leaveorderpage">Заказать</Link></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content