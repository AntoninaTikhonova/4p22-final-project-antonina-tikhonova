import React from "react";
import { useNavigate } from "react-router-dom";

import { QwntityButton } from "../../../../../../share/components";
import s from './ProductItem.module.scss'

const ProductItem = (props) => {
    const {id, image, title, price } = props
    const navigate = useNavigate()

    const clickPlus = (event) => {
        event.preventDefault(event)
        console.log({
            image,
            title,
            price
        })
        // this.setState((prevState) => {
        //     return {
        //         counter: prevState.counter + 1,
        //     }})
    }

    return (

        <div className={s.root} >
            <div className={s.card}  onClick={() => navigate(`/product/${id}`)}>
                <div className={s.image}><img src={image} alt='product'/></div>
                <div className={s.title}>{title}</div>
                <div className={s.price}>{price} ₽</div>
                
            </div>
            <div className={s.toCart}>
                    <div className={s.button}>
                        <QwntityButton
                        // onClick={clickMinus} 
                        text='-' />             
                    </div>   
                    <div className={s.qwantity}>0</div>
                    <div className={s.button}>
                        <QwntityButton 
                        onClick={clickPlus} 
                        text='+' /> 
                    </div>       
                </div>
        </div>

    )
}

export default ProductItem