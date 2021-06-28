import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import customerActions from '../../../store/actionCreators/cutomers'
import { CharacteristicsType } from '../../../store/reducers/cutomerReducer'
import { productCountSelector } from '../../../store/selectors/customerSelectors'
import s from '../../../styles/components/pages/Product/ProductInfo.module.scss'


type ProductInfoPropsType = {
    info: {
        title: string,
        price: number,
        inStock: boolean,
        chars: Array<CharacteristicsType>,
        desc: string
    }
}

const ProductInfo: FC<ProductInfoPropsType> = ({ info }) => {
    const dispatch = useDispatch()
    const productCount = useSelector(productCountSelector)

    const { title, price, inStock, chars, desc } = info

    const renderedChars = chars?.map((char, i) => <li key={i}>
        <span className={s.point}>{char.point}: </span>
        <span className={s.value}>{char.value}</span>
    </li>)

    const discountMessage = productCount < 3 ? 
        `Чтобы получить скидку в 10% закажите еще ${3 - productCount} ${3 - productCount === 1 ? 'устройство' : 'устройства'}.` :
        'Скидка в 10% активна!'

    useEffect(() => {
        if(productCount >= 3){
            dispatch(customerActions.setDiscountStatus(true))
        }else{
            dispatch(customerActions.setDiscountStatus(false))
        }
    }, [productCount])

    return (
        <div className={s.window}>
            <div className={s.content}>
                <h2 className={s.title}>{ title }</h2>
                <div className={s.priceAndStock}>
                    <div className={s.price}>{ price } ₴</div>
                    <div className={s.inStock}>{ inStock ? 'В наличии' : 'Нет в наличии'}</div>
                </div>
                <div className={s.message}>
                    { discountMessage }
                </div>
                <div className={s.block}>
                    <h3 className={s.pointTitle}>Характеристики</h3>
                    <ul className={s.charList}>
                        { renderedChars }
                    </ul>
                </div>
                <div className={s.block}>
                    <h3 className={s.pointTitle}>Описание</h3>
                    <p className={s.desc}>
                        { desc }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
