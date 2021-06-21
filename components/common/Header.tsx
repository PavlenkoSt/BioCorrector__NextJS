import Link from 'next/link'
import { useState } from 'react'
import s from '../../styles/components/Header.module.scss'


export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleBurger = () => setMenuOpen((prevState) => !prevState)

    const navs = [
        {title: 'Главная', href: '/'},
        {title: 'Статьи', href: '/articles'},
        {title: 'Отзывы', href: '/reviews'},
        {title: 'Вопросы и ответы', href: '/questions'}
    ]

    const renderedNavLinks = navs.map(nav => <Link key={nav.href} href={ nav.href }>{ nav.title }</Link>)

    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.main}>
                    <img src='/icons/logo.svg' alt='bio corrector' className={s.logo}/>
                    <div className={`${s.burger} ${menuOpen ? s.active : ''}`} onClick={toggleBurger}>
                        <div className={s.burger__line}></div>
                    </div>
                    <nav className={`${s.nav} ${menuOpen ? s.show : ''}`}>
                        { renderedNavLinks }
                    </nav>
                    <div className={s.order}>
                        <button className={s.orderBtn}><span className={s.orderBtn__content}>Заказать звонок</span></button>
                        <span className={s.tel}>+7 (925) 685-75-88</span>
                    </div>
                </div>
            </div>
        </header>
    )
}