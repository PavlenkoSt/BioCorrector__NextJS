import { FC, ReactNode, useState } from 'react'
import s from '../../styles/components/common/Header.module.scss'
import Link from 'next/link'


type HeaderPropsType = {
    nav: Array<ReactNode>
}

const Header: FC<HeaderPropsType> = ({ nav }) =>{
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleBurger = () => setMenuOpen((prevState) => !prevState)

    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.main}>
                    <img src='/icons/logo.svg' alt='bio corrector' className={s.logo}/>
                    <div className={`${s.burger} ${menuOpen ? s.active : ''}`} onClick={toggleBurger}>
                        <div className={s.burger__line}></div>
                    </div>
                    <nav className={`${s.nav} ${menuOpen ? s.show : ''}`}>
                        { nav }
                    </nav>
                    <div className={s.order}>
                        <Link href='/order-call'>
                            <button className={s.orderBtn}><span className={s.orderBtn__content}>Заказать звонок</span></button>
                        </Link>
                        <Link href='tel:+79256857588'><span className={s.tel}>+7 (925) 685-75-88</span></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header