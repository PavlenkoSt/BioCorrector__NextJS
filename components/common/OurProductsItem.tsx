import { FC } from "react"
import s from '../../styles/components/common/OurProducts.module.scss'
import Link from 'next/link'


type OurProductsItemPropsType = {
    id: number
    name: string
    price: number
    picture: string
}

const OurProductsItem: FC<OurProductsItemPropsType> = ({ id, name, price, picture }) => {
    return (
        <Link href={`/product/${id}`}>
            <div className={s.overlay}>
                <div className={s.content}>
                    <img className={s.img} src={picture} alt="product" />
                    <div className={s.divinedLine}>
                        <div className={s.line}></div>
                        <div className={s.figure}></div>
                        <div className={s.line}></div>
                    </div>
                    <div className={s.name}>{name}</div>
                    <div className={s.price}>{price} грн</div>
                </div>
            </div>
        </Link>
    )
}

export default OurProductsItem