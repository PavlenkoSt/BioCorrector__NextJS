import React from 'react'
import Button from '../../common/Button'
import s from '../../../styles/components/common/Order.module.scss'

const NotChosen = () => {
    return (
        <>
            <h2 className={s.title}>Для оформления заказа сначала выберите продукт!</h2>
            <Button
                href='/'
                text='На главную'
            />
        </>
    )
}

export default NotChosen
