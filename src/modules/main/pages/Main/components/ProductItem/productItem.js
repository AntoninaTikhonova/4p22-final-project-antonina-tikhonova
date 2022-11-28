import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../../../../share/components";
import s from './productItem.module.scss'

const ProductItem = (props) => {
    const {id, image, title, price } = props
    const navigate = useNavigate()

    const click = (event) => {
        event.preventDefault(event)
        console.log({
            image,
            title,
            price
        })
    }

    return (

        <div>
            <div className={s.root} onClick={() => navigate(`/product/${id}`)}>
                <div className={s.image}><img src={image} alt='product'/></div>
                <div className={s.title}>{title}</div>
                <div className={s.price}>{price} ₽</div>
                <div className={s.toCart}>
                    <Button text='-' />        
                    <div>0</div>
                    <Button text='+' />        
                </div>
            </div>
        </div>

    )
}

export default ProductItem