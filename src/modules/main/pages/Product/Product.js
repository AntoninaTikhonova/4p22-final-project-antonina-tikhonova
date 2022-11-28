import React, { useEffect, useState  } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import MainLayout from '../../../../share/MainLayout/MainLayout'
import { Button } from '../../../../share/components'
import api from '../../config/api'

import s from './product.module.scss'

const Product = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [productInfo, setProductInfo] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        setIsLoading(true)
        api.fetchProduct(params.productId).then(data => { 
            setProductInfo(data)
            console.log(data)
            setIsLoading(false)
        })
    }, [params])

    // const addToCart = (event) => {
    //     event.preventDefault();

    //     console.log(item.id)
    // }

    return <MainLayout>
        <div className={s.root}>
            <Button 
                onClick={() => navigate('/')} 
                text='Назад'                />

            { isLoading ? (
                <h1>Loading...</h1>
            ) : productInfo ? (
                <>
                    <img className={s.image} src={productInfo.image}/>
                    <div className={s.title}>{productInfo.title}</div>
                    <div className={s.description}>{productInfo.description}</div>
                    <div className={s.price}>{productInfo.price} ₽</div>
                </>
            ) : (
                'Нет товара'
            )}
            <div className={s.toCart}>
                <Button text='-' />        
                <div></div>
                <Button text='+' />        
            </div>
        </div>
    </MainLayout>
}

export default Product