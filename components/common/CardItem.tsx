import { FC } from "react"
import s from '../../styles/components/common/CardItem.module.scss'
import Link from 'next/link'
import SocialSource from './SocialSource'

type ReviewsItemPropsType = {
    title?: string
    author?: string
    text: Array<string>
    date: string
    id: number
    type: 'reviews' | 'articles'
}

const CardItem: FC<ReviewsItemPropsType> = ({ id, title, author, text, date, type }) => {
    return (
        <Link href={`/${type}/${id}`}>
            <div className={s.item}>
                <div className={s.itemInner}>

                { type === 'reviews' && (
                    <>
                        <div className={s.author}>{author}</div>
                        <div className={s.info}>
                            <div className={s.date}>{date}</div>
                            <SocialSource />
                        </div>
                    </>
                )}

                { type === 'articles' && (
                    <>
                        <div className={s.title}>{title}</div>
                        <div className={s.articleInfo}>
                            <div className={s.date}>{date}</div>
                            <div className={s.diviner}></div>
                        </div>
                    </>
                )}
                    
                    <div className={s.text}>
                        {text.map((block, i) => <p key={i}>{block}</p>)}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardItem