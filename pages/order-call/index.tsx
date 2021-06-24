import EmptyLayout from "../../components/layouts/EmptyLayout"
import Order from '../../components/common/Order'

const OrderCall = () => {
    return (
        <EmptyLayout title='Заказать звонок'>
            <Order 
                title='Заказать звонок'
                subtitle='Укажите Ваши контакты - и мы обязательно проконсультируем Вас.'
                copy='Мы используем Ваши данные только для предоставления консультации!'
            />
        </EmptyLayout>
    )
}

export default OrderCall