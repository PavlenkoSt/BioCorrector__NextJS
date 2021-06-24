import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import customerActions from '../../../store/actionCreators/cutomers'
import { productCountSelector, totalPriceSelector } from '../../../store/selectors/customerSelectors'
import s from '../../../styles/components/pages/Product/Counter.module.scss'
import Button from '../../common/Button'

const Counter = () => {
    const dispatch = useDispatch()
    
    const productCount = useSelector(productCountSelector)
    const totalPrice = useSelector(totalPriceSelector)

    const increment = () => dispatch(customerActions.incrementProductCount())
    const decrement = () => dispatch(customerActions.decrementProductCount())

    return (
        <div className={s.main}>
            <div className={s.title}>Количество:</div>
            <div className={s.counterActions}>
                <button className={s.btn} disabled={productCount <= 1} onClick={decrement} >&#8722;</button>
                <div className={s.count}>{ productCount }</div>
                <button className={s.btn} onClick={increment}>+</button>
            </div>
            <Button
                text={`${totalPrice}₴ - Заказать`}
                href='/order-product'
                filled={true}
            />
        </div>
    )
}

export default Counter
