import React, { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ProductType } from "../../store/reducers/productsReducer"
import { productsSelector } from "../../store/selectors/productsSelectors"
import OurProductsItem from "./OurProductsItem"
import s from '../../styles/components/common/OurProducts.module.scss'
import { getProductsThunk } from "../../store/thunks/products"


const OurProducts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    const products = useSelector(productsSelector)

    const renderedProducts = products
        .filter((product: ProductType, i: number) => i < 4)
        .map((product: ProductType) => <OurProductsItem
            key={product.id}
            id={product.id}
            pictures={product.pictures}
            name={product.name}
            price={product.price}
        />)

    return (
        <section>
            <h2 className='title'>Наша продукция</h2>
            <div className={s.board}>
                { renderedProducts }
            </div>
        </section>
    )
}

export default OurProducts