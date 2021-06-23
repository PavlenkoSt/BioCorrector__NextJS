import React from 'react'
import SubscribeForm from './SubscribeForm'
import s from '../../../styles/components/pages/Home/Subscribe.module.scss'

const Subscribe = () => {
    return (
        <div className={s.subscribe}>
            <div className={s.content}>
                <h2 className={s.title}>Хотите быть в курсе последних разработок?</h2>
                <p className={s.info}>Подпишитесь на рассылку - и узнаете об новинках первым. </p>
                <SubscribeForm/>
                <p className={s.security}>Секретность Ваших данных - гарантирована.</p>
            </div>
        </div>
    )
}

export default Subscribe
