import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/img/logo.png'
import Phone from '../../assets/img/phone.png'
import Email from '../../assets/img/email.png'
import Trolley from '../../assets/img/trolley.png'
import User from '../../assets/img/user.png'


import s from './MainLayout.module.scss'


const MainLayout = (props) => {

    const navigate = useNavigate()

    
    return (
        <div>
            <header>
                <div className={s.header}>
                    <img width={40} height={40} src={Logo} alt='LOGO' />
                    <h3>Сибирский Мишка</h3>
                </div>
                <div className={s.contacts}>
                    <div className={s.phone}>
                        <img width={15} height={15} src={Phone} alt='Phone' />
                        + 7 (123) 456-78-90
                    </div>
                    <div className={s.email}>
                        <img width={15} height={15} src={Email} alt='Email' />
                        SiberianBear@nsk.ru
                    </div>
                </div>
                <div className={s.user}>
                        <img width={30} height={30} src={User} alt='user'
                        onClick={() => navigate('/registration')} />
                </div>
            </header>
            <nav className={s.navigation}>
                    <a className={s.navigation__link} onClick={() => navigate('/')}>
                        Товары
                    </a>
                    <a className={s.navigation__link} onClick={() => navigate('/support')}>
                        Форма обратной связи
                    </a>
                    
                    <div className={s.navigation__cart} onClick={() => navigate('/cart')}>
                        <img width={30} height={30} src={Trolley} alt='cart'></img>
                    </div>
            </nav>
            <div className={s.content}>
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout