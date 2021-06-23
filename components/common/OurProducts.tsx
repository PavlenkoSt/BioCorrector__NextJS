import React from "react"
import { useSelector } from "react-redux"
import { ProductType } from "../../store/reducers/productsReducer"
import { productsSelector } from "../../store/selectors/productsSelectors"
import OurProductsItem from "./OurProductsItem"
import s from '../../styles/components/common/OurProducts.module.scss'


const OurProducts = () => {
    const products = useSelector(productsSelector)

    // Таким образом показываем 4 самых новых продукта
    const renderedProducts = products
        .reverse()
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