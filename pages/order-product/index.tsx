import React, { useState } from 'react'
import EmptyLayout from '../../components/layouts/EmptyLayout'
import OrderSuccess from '../../components/common/OrderSuccess'
import OrderProduct from '../../components/pages/Order-product/OrderProduct'
import { useSelector } from 'react-redux'
import { activeProductSelector, productCountSelector } from '../../store/selectors/customerSelectors'
import isEmptyObject from '../../helpers/isEmptyObject'
import NotChosen from '../../components/pages/Order-product/NotChosen'



const OrderProductPage = () => {
    const [isOrdered, setIsOrdered] = useState(false)

    const activeProduct = useSelector(activeProductSelector)
    const productCount = useSelector(productCountSelector)

    const isNotChosen = productCount === 0 || !activeProduct || isEmptyObject(activeProduct)

    return (
        <EmptyLayout 
            title='Заказать товар'
            description='Купить биокор'
            keywords='Купить, ..., ....'
        >
            {
                isNotChosen
                    ? <NotChosen/>
                    : (
                        !isOrdered ? (
                            <OrderProduct
                                setIsOrdered={setIsOrdered}
                            />
                        ) : (
                            <OrderSuccess
                                title='Ваш заказ подтвержден автоматически'
                                type='product'
                            />
                        )
                    )
            }
        </EmptyLayout>    
    )
}

export default OrderProductPage
