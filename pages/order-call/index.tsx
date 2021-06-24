import EmptyLayout from "../../components/layouts/EmptyLayout"
import Order from '../../components/common/Order'
import OrderSuccess from '../../components/common/OrderSuccess'

import { useEffect, useState } from "react"

const OrderCall = () => {
    const [isOrdered, setIsOrdered] = useState(false)

    useEffect(() => {
        return () => setIsOrdered(false)
    }, [])

    return (
        <EmptyLayout title='Заказать звонок'>
            { !isOrdered ? (
                <Order 
                    title='Заказать звонок'
                    subtitle='Укажите Ваши контакты - и мы обязательно проконсультируем Вас.'
                    copy='Мы используем Ваши данные только для предоставления консультации!'
                    setIsOrdered={setIsOrdered}
                    type='call'
                />
            ): (
                <OrderSuccess
                    title='Заказ звонка зарегистрирован'
                    subtitle='Консультант свяжется с Вами в кратчайшие сроки. Благодарим за оказанное доверие!'
                    type='call'
                />
            )}
        </EmptyLayout>
    )
}

export default OrderCall