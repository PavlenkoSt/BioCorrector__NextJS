import React, { FC } from 'react'
import s from '../../styles/components/common/Order.module.scss'
import Button from '../../components/common/Button'


type OrderSuccessPropsType = {
    title: string
    subtitle: string
}

const OrderSuccess: FC<OrderSuccessPropsType> = ({ title, subtitle }) => {
    return (
        <div className={s.overlay}>
            <div className={s.window}>
                <div className={s.wrapper}>
                    <img className={s.img} src='/icons/success.png' alt='success'/>
                    <h2 className={s.title}>{ title }</h2>
                    <p className={s.subtitle}>{ subtitle }</p>
                    <Button
                        text='На главную'
                        href='/'
                    />
                </div>
            </div>
        </div>
    )
}

export default OrderSuccess
