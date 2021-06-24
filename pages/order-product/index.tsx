import React, { useState } from 'react'
import EmptyLayout from '../../components/layouts/EmptyLayout'
import Order from '../../components/common/Order'
import OrderSuccess from '../../components/common/OrderSuccess'

const OrderProduct = () => {
    const [isOrdered, setIsOrdered] = useState(false)

    return (
        <EmptyLayout title='Заказать товар'>
            {
                !isOrdered ? (
                    <Order
                        title='Оформить заказ'
                        subtitle='Укажите Ваши контакты для подтверждения заказа.'
                        copy='Мы используем Ваши данные только для предоставления консультации!'
                        setIsOrdered={setIsOrdered}
                        type='product'
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

export default OrderProduct
