import { FC } from "react"
import s from '../../styles/components/common/Reviews.module.scss'
import Link from 'next/link'
import SocialSource from './SocialSource'

type ReviewsItemPropsType = {
    author: string
    text: Array<string>
    date: string
    id: number
}

const ReviewsItem: FC<ReviewsItemPropsType> = ({ id, author, text, date }) => {
    return (
        <Link href={`/reviews/${id}`}>
            <div className={s.item}>
                <div className={s.itemInner}>
                    <div className={s.author}>{author}</div>
                    <div className={s.info}>
                        <div className={s.date}>{date}</div>
                        <SocialSource />
                    </div>
                    <div className={s.text}>
                        {text.map((block, i) => <p key={i}>{block}</p>)}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ReviewsItem