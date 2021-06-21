import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import s from '../../styles/commonsComponents/Header.module.scss'
import logo from '../../public/icons/logo.svg'


export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleBurger = () => setMenuOpen((prevState) => !prevState)

    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.main}>
                    <Image src={logo} alt='bio corrector' className={s.logo}/>
                    <div className={`${s.burger} ${menuOpen ? s.active : ''}`} onClick={toggleBurger}>
                        <div className={s.burger__line}></div>
                    </div>
                    <nav className={`${s.nav} ${menuOpen ? s.show : ''}`}>
                        <Link href='/'>Главная</Link>
                        <Link href='/articles'>Статьи</Link>
                        <Link href='/reviews'>Отзывы</Link>
                        <Link href='/questions'>Вопросы и ответы</Link>
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