import React, { useEffect, useState } from 'react'

import { MainLayout } from '../../../../share'
import api from '../../config/api'
import { ProductItem } from './components' 
import Clear from '../../../../assets/img/clear.png'

import s from './Main.module.scss'
import { Button, Input } from '../../../../share/components'

const Main = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [totalProducts, setTotalPrducts] = useState([])
    const [category, setCategory] = useState('all')
        
    useEffect( () => {
        setIsLoading(true)
        api.fetchProducts().then(data => {
            setProducts(data)
            setTotalPrducts(data)
            setIsLoading(false)
        })
    }, [])

    useEffect( () => {
        let foundItems = products.filter((product) => 
            product.title.toLowerCase().includes(search.toLowerCase()),
        )
        if (category === 'BMW X5 E70') {
            foundItems = foundItems.filter((product) => product.category === 'BMW X5 E70')
        } if (category === 'BMW X6 E71') {
            foundItems = foundItems.filter((product) => product.category === 'BMW X6 E71')
        } if (category === 'all') {
            foundItems = foundItems
        }
        setTotalPrducts(foundItems) 
    }, [search, products, category])


    return (
        <MainLayout>
            <div className={s.search}>
                {search && (
                    <img 
                        className={s.search__clear}
                        onClick={() => setSearch('')} 
                        src={Clear} 
                        alt='clear'
                    />
                )}
                <Input 
                    className={s.form} 
                    onChange={(event) => (setSearch(event.target.value))} 
                    value={search} 
                    placeholder={'Поиск...'} 
                />
                <div className={s.buttons}>
                    <Button
                        onClick={() => {setCategory('all')}}
                        text='Все'
                    />
                    <Button
                        onClick={() => {setCategory('BMW X5 E70')}}
                        text='E70'
                    />
                    <Button
                        onClick={() => {setCategory('BMW X6 E71')}}
                        text='E71'
                    />
                </div>
            </div>
            <div className={s.root}>{
                !isLoading ?  totalProducts.map((product) => (

                    <ProductItem 
                        key={product.id} 
                        id={product.id}
                        image={product.image} 
                        title={product.title} 
                        price={product.price} 
                    />
                    
                )) : 
                (
                    <h1>Loading...</h1>
                )
            }</div>
        </MainLayout>
    )
}

export default Main