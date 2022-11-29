import React, { useEffect, useState } from 'react'

import { MainLayout } from '../../../../share'
import api from '../../config/api'
import { ProductItem } from './components' 
// import Product from '../Product/Product'
// import { PRODUCTS } from '../../../../mocks/_mocks'
import Search from '../../../../assets/img/search.png'
import Clear from '../../../../assets/img/clear.png'

import s from './Main.module.scss'
import { Button, Input } from '../../../../share/components'

const Main = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState('')
    // const [options, setOptions] = useState('')
    
    // console.log(products)
        
    useEffect( () => {
        setIsLoading(true)
        api.fetchProducts().then(data => {
            setProducts(data)
            // console.log(data)
            setIsLoading(false)
        })
    }, [])

    const renderItems = () => {

        const filteredItems = products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase()),
        );
        // console.log(filteredItems)
        return (!isLoading ?  filteredItems.map((product) => (

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
        ))
    }
    
    const renderE70 = () => {
            const bmwE70 = products.filter((product) =>
            product.category === 'BMW X5 E70') ;

        console.log(bmwE70)

        return bmwE70.map((product) => (

            <ProductItem 
                key={product.id} 
                id={product.id}
                image={product.image} 
                title={product.title} 
                price={product.price} 
            />
        ))
    }

    const renderE71 = () => {
            const bmwE71 = products.filter((product) =>
            product.category === 'BMW X6 E71') ;

        console.log(bmwE71)

        return bmwE71.map((product) => (

            <ProductItem 
                key={product.id} 
                id={product.id}
                image={product.image} 
                title={product.title} 
                price={product.price} 
            />
        ))
    }

    return (
        <MainLayout>
            <div className={s.search}>
                {/* <img  src={Search} alt='search'/> */}
                {search && (
                    <img 
                        className={s.search__clear}
                        onClick={() => setSearch('')} 
                        src={Clear} 
                        alt='clear'
                    />
                )}
                <div className={s.input}>
                    <Input 
                        className={s.form} 
                        onChange={(event) => (setSearch(event.target.value))} 
                        value={search} 
                        placeholder={'Поиск...'} 
                    />
                </div>
                <div className={s.buttons}>
                    <Button
                        onClick={(event) => {renderE70()}}
                        text='E70'
                    />
                    <Button
                        onClick={(event) => {renderE71()}}
                        text='E71'
                    />
                </div>
            </div>
            <div className={s.root}>{renderItems()}</div>
        </MainLayout>
    )
}

export default Main