import { Button } from '../../../../../../share/components'

import s from './cartItem.module.scss'

const CartItem = (props) => {
  const { id, title, image, price, cartProducts, setCartProducts } = props

  const onDeleteCartItem = () => {
    setCartProducts(cartProducts.filter((product) => product.id !== id))
  }

  return (
    <div className={s.root}>
        <div className={s.image}>
            <img src={image} alt='product'/>
        </div>
        
        <div className={s.title}>{title}</div>
        <div className={s.price}>{price}</div>
        <Button 
            onClick={onDeleteCartItem} 
            text=' - '/>
    </div>
  )
}

export default CartItem