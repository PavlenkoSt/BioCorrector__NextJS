import { FC } from 'react'
import s from '../../../styles/components/common/Order.module.scss'
import OrderProductForm from './OrderProductForm'

type OrderProductPropsType = {
    setIsOrdered: (isOrdered: boolean) => void
}

const OrderProduct: FC<OrderProductPropsType> = ({ setIsOrdered }) => {
    return (
        <div className={s.overlay}>
            <div className={s.window}>
                <div className={s.wrapper}>
                    <h2 className={s.title}>Оформить заказ</h2>
                    <OrderProductForm
                        setIsOrdered={setIsOrdered}
                    />
                </div>
            </div>
        </div>
    )
}

export default OrderProduct