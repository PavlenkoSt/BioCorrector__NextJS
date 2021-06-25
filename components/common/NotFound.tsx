import React, { FC } from 'react'
import s from '../../styles/components/common/NotFound.module.scss'
import Button from './Button'


type NotFoundPropsType = {
    element: string
}

const NotFound: FC<NotFoundPropsType> = ({ element }) => {
    return (
        <div className={s.window}>
            <p className={s.message}>Ошибка! {element} по даному адресу не найден!</p>
            <Button
                href='/'
                text='На главную'
            />
        </div>
    )
}

export default NotFound
