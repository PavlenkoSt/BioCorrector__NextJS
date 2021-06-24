import { FC } from 'react'
import s from '../../styles/components/common/Order.module.scss'
import OrderForm from './OrderForm'


type OrderPropsType = {
    title: string
    subtitle: string
    copy: string
    setIsOrdered: (isOrdered: boolean) => void
    type: 'product' | 'call'
}

const Order: FC<OrderPropsType> = ({ title, subtitle, copy, setIsOrdered, type }) => {
    return (
        <div className={s.overlay}>
            <div className={s.window}>
                <div className={s.wrapper}>
                    <h2 className={s.title}>{ title }</h2>
                    <p className={s.subtitle}>{ subtitle }</p>
                    <OrderForm
                        setIsOrdered={setIsOrdered}
                        type={type}
                    />
                    <div className={s.copy}>{ copy }</div>
                </div>
            </div>
        </div>
    )
}

export default Order