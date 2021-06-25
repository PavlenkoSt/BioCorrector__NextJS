import React, { FC } from 'react'
import s from '../../styles/components/common/ContentWindow.module.scss'
import SocialSource from '../../components/common/SocialSource'
import Button from './Button'


type ContentWindowPropsType = {
    author: string
    date: string
    text: Array<string>
    next: {
        author: string
        id: number
    }
}

const ContentWindow: FC<ContentWindowPropsType>  = ({ author, date, text, next }) => {
    return (
        <div className={s.window}>
            <h2 className={s.title}>{ author }</h2>
            <div className={s.subtitle}>
                <div className={s.date}>{ date }</div>
                <div className={s.diviner}></div>
                <div className={s.social}>
                    <SocialSource />
                </div>
            </div>
            <div className={s.text}>
                { text.map((p, i) => <p key={i}>{ p }</p>) }
            </div>
            <div className={s.nav}>
                <div className={s.nextCom}>следующий комментарий</div>
                <div className={s.nextAutor}>{ next.author }</div>
                <Button
                    text='Читать'
                    href={`/reviews/${next.id}`}
                />
            </div>
        </div>
    )
}

export default ContentWindow
