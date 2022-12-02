import React , { useState } from 'react'
import MainLayout from '../../../../share/MainLayout/MainLayout'

import { CART_PRODUCTS } from '../../config/_staticCart'
import { CartItem } from './components/'
import { Button } from '../../../../share/components'

import s from './Cart.module.scss'
const Cart = () => {

    const [cartProducts, setCartProducts] = useState(CART_PRODUCTS)

    const totalPrice = cartProducts.reduce((sum, cartProduct) => cartProduct.price + sum, 0)

    return (
        <MainLayout>
                <div className={s.root}>

                    <div className={s.description}>Итоговая стоимость...
                        <span>{totalPrice} руб.</span>
                        <Button 
                            onClick={(event) => 
                                (cartProducts.length !==0 ? 
                                    console.log(cartProducts) : 
                                    console.log('Товары не выбраны'))}
                            text='Оформить заказ'/>
                    </div>
                
                {cartProducts.map((cartProduct) => (
                    <CartItem
                    key={cartProduct.id}
                    id={cartProduct.id}
                    title={cartProduct.title}
                    image={cartProduct.image}
                    price={cartProduct.price}
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    />
                ))}
            </div>

    </MainLayout>
  )
}

export default Cart