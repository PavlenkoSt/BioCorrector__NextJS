import React, { FC, memo } from "react"
import { ProductType } from "../../store/reducers/cutomerReducer"
import OurProductsItem from "./OurProductsItem"
import s from '../../styles/components/common/OurProducts.module.scss'


type OurProductsPropsType = {
    products: Array<ProductType>
}

const OurProducts: FC<OurProductsPropsType> = ({ products }) => {
    
    const renderedProducts = products
        .filter((product: ProductType, i: number) => i < 4)
        .map((product: ProductType) => <OurProductsItem
            key={product.id}
            id={product.id}
            pictures={product.pictures}
            name={product.name}
            price={product.price}
            desc={product.shortDescription}
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

export default memo(OurProducts)