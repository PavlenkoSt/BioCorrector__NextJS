import EmptyLayout from "../../components/layouts/EmptyLayout"
import OrderSuccess from '../../components/common/OrderSuccess'
import { useState } from "react"
import OrderCall from '../../components/pages/Order-call/OrderCall'


const OrderCallPage = () => {
    const [isOrdered, setIsOrdered] = useState(false)

    return (
        <EmptyLayout 
            title='Заказать звонок'
            description='Звонок - ....'
            keywords='Звонок Звонок Звонок'
        >
            { 
                !isOrdered ? (
                    <OrderCall
                        setIsOrdered={setIsOrdered}
                    />
                ) : (
                    <OrderSuccess
                        title='Заказ звонка зарегистрирован'
                        subtitle='Консультант свяжется с Вами в кратчайшие сроки. Благодарим за оказанное доверие!'
                        type='call'
                    />
                )
            }
        </EmptyLayout>
    )
}

export default OrderCallPage