import React, { FC } from 'react'
import s from '../../styles/components/common/NotFound.module.scss'
import Button from './Button'


type NotFoundPropsType = {
    element: string
}

const NotFound: FC<NotFoundPropsType> = ({ element }) => {

    const declension = element === 'Статья' || element === 'Страница' ? 'найдена' : 'найден'

    return (
        <div className={s.window}>
            <p className={s.message}>Ошибка! { element } по даному адресу не { declension }!</p>
            <Button
                href='/'
                text='На главную'
            />
        </div>
    )
}

export default NotFound
