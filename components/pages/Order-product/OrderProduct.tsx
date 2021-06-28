import { FC } from 'react'
import s from '../../../styles/components/common/Order.module.scss'
import OrderProductForm from './OrderProductForm'

type OrderProductPropsType = {
    setIsOrdered: (isOrdered: boolean) => void
}

const OrderProduct: FC<OrderProductPropsType> = ({ setIsOrdered }) => {
    return (
        <>
            <h2 className={s.title}>Оформить заказ</h2>
            <OrderProductForm setIsOrdered={setIsOrdered} />
        </>
    )
}

export default OrderProduct