import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/img/logo.png'
import Trolley from '../../assets/img/trolley.png'
import User from '../../assets/img/user.png'


import s from './MainLayout.module.scss'


const MainLayout = (props) => {

    const navigate = useNavigate()
    

    

    
    return (
        <div>
            <header >
                <div className={s.header}>
                    <img width={40} height={40} src={Logo} alt='LOGO'></img>
                    <h3>Сибирский Мишка</h3>
                </div>
                <div className={s.header__user}>
                        <img width={30} height={30} src={User} alt='user'
                        onClick={() => navigate('/registration')}></img>
                </div>
            </header>
            <section className={s.navigation}>
                <div className={s.navigation__left}>
                    <a className={s.navigation__link} onClick={() => navigate('/')}>
                        Все товары
                    </a>
                    <a className={s.navigation__link} onClick={() => navigate('/support')}>
                        Форма обратной связи
                    </a>
                    
                </div>
                <div className={s.navigation__right}>        
                    <div className={s.navigation__cart} onClick={() => navigate('/cart')}>
                        <img width={30} height={30} src={Trolley} alt='cart'></img>
                    </div>
                    {/* <div className={s.navigation__amount}>
                        сумма: {''}
                        <span className={s.navigation__amount_value}>15000</span>
                    </div> */}
                </div>
            </section>
            <div className={s.content}>
                {/* <h2 { searchValue ? `Поиск по запросу: "${searchValue}"` : ' ' }></h2> */}
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout