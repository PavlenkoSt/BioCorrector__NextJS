import { FC } from 'react'
import s from '../../../styles/components/common/Order.module.scss'
import OrderCallForm from './OrderCallForm'


type OrderCallPropsType = {
    setIsOrdered: (isOrdered: boolean) => void
}

const OrderCall: FC<OrderCallPropsType> = ({ setIsOrdered }) => {
    return (
        <div className={s.overlay}>
            <div className={s.window}>
                <div className={s.wrapper}>
                    <h2 className={s.title}>Заказать звонок</h2>
                    <p className={s.subtitle}>Укажите Ваши контакты - и мы обязательно проконсультируем Вас.</p>
                    <OrderCallForm
                        setIsOrdered={setIsOrdered}
                    />
                    <div className={s.copy}>Мы используем Ваши данные только для предоставления консультации!</div>
                </div>
            </div>
        </div>
    )
}

export default OrderCall