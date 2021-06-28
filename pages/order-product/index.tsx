import React, { useState } from 'react'
import EmptyLayout from '../../components/layouts/EmptyLayout'
import OrderSuccess from '../../components/common/OrderSuccess'
import OrderProduct from '../../components/pages/Order-product/OrderProduct'

const OrderProductPage = () => {
    const [isOrdered, setIsOrdered] = useState(false)

    return (
        <EmptyLayout title='Заказать товар'>
            {
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
            }
        </EmptyLayout>    
    )
}

export default OrderProductPage
