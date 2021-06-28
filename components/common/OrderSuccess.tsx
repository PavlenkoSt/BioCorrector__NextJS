import React, { FC } from 'react'
import s from '../../styles/components/common/Order.module.scss'
import Button from '../../components/common/Button'
import { useSelector } from 'react-redux'
import { customerDataSelector } from '../../store/selectors/customerSelectors'


type OrderSuccessPropsType = {
    title: string
    type: 'product' | 'call'
    subtitle?: string
}

const OrderSuccess: FC<OrderSuccessPropsType> = ({ title, subtitle, type }) => {
    const { name, tel } = useSelector(customerDataSelector)

    const subtitleElement = type === 'call' && (
        <p className={s.subtitle}>{ subtitle }</p> 
    )

    const customerData = type === 'product' && (
        <div className={s.confirm}>
            <div>
                <div className={s.confPoint}>Ваш заказ будет отправлен на имя:</div>
                <div className={s.confValue}>{ name },</div>
            </div>
            <div>
                <div className={s.confPoint}>за номером телефона:</div>
                <div className={s.confValue}>{ tel }</div>
            </div>
        </div>
    )

    return (
        <>
            <img className={s.img} src='/icons/success.png' alt='success'/>
            <h2 className={s.title}>{ title }</h2>
            { subtitleElement }
            { customerData }
            <Button
                text='На главную'
                href='/'
            />
        </>
    )
}

export default OrderSuccess
