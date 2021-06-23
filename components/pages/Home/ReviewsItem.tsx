import { FC } from "react"
import s from '../../../styles/components/pages/Home/Reviews.module.scss'
import Link from 'next/link'



type ReviewsItemPropsType = {
    author: string
    text: Array<string>
    date: string
}

const ReviewsItem: FC<ReviewsItemPropsType> = ({ author, text, date }) => {
    return (
        <div className={s.item}>
            <div className={s.itemInner}>
                <div className={s.author}>{author}</div>
                <div className={s.info}>
                    <div className={s.date}>{date}</div>
                    <div className={s.source}>Оставлен в: 
                        <Link href='/'>
                            <span className={s.social}><img src="/icons/social/fb.png" alt="fb"/> Facebook</span>
                        </Link>
                    </div>
                </div>
                <div className={s.text}>
                    {text.map((block, i) => <p key={i}>{block}</p>)}
                </div>
            </div>
        </div>
    )
}

export default ReviewsItem