import React from 'react'
import Link from 'next/link'
import s from '../../../styles/components/pages/Product/NotFound.module.scss'
import Button from '../../common/Button'

const NotFound = () => {
    return (
        <div className={s.window}>
            <p className={s.message}>Ошибка! Продукт по даному адресу не найден!</p>
            <Button
                href='/'
                text='На главную'
            />
        </div>
    )
}

export default NotFound
