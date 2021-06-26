import React, { FC } from 'react'
import s from '../../styles/components/common/ContentWindow.module.scss'
import SocialSource from '../../components/common/SocialSource'
import Button from './Button'


type ContentWindowPropsType = {
    title: string
    date: string
    text: Array<string>
    next: {
        title: string
        id: number
    }
    type: 'reviews' | 'articles'
}

const ContentWindow: FC<ContentWindowPropsType>  = ({ title, date, text, next, type }) => {

    const navLabel = type === 'reviews' 
        ? 'следующий комментарий' : type === 'articles' 
        ? 'следующая статья' : ''

    return (
        <div className={s.window}>
            <h2 className={s.title}>{ title }</h2>

            { type === 'reviews' && (
                <>
                    <div className={s.subtitle}>
                        <div className={s.date}>{ date }</div>
                        <div className={s.diviner}></div>
                        <div className={s.social}>
                            <SocialSource />
                        </div>
                    </div>
                </>
            )}

            { type === 'articles' && (
                <>
                    <div className={s.subtitleArticles}>
                        <div className={s.dateArticles}>{ date }</div>
                        <div className={s.diviner}></div>
                    </div>
                </>
            )}
            
            <div className={s.text}>
                { text?.map((p, i) => <p key={i}>{ p }</p>) }
            </div>
            <div className={s.nav}>
                <div className={s.nextCom}>{ navLabel }</div>
                <div className={s.nextTitle}>"{ next.title }"</div>
                <Button
                    text='Читать'
                    href={`/${type}/${next.id}`}
                />
            </div>
        </div>
    )
}

export default ContentWindow
