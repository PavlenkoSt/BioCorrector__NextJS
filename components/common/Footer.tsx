import s from '../../styles/components/Footer.module.scss'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

type HeaderPropsType = {
    nav: Array<ReactNode>
    socials: Array<ReactNode>
}

const Footer: FC<HeaderPropsType> = ({ nav, socials }) => {
    return (
        <footer className={s.main}>
            <div className={s.content}>
                <div className="container">
                    <div className={s.blocks}>
                        <div className={s.contacts}>
                            <Link href='tel:+79256857588'><span className={s.tel}>+7 (925) 685-75-88</span></Link>
                            <Link href='mailto:biokor17@mail.ru'><span className={s.mail}>biokor17@mail.ru</span></Link>
                        </div>
                        <div className={s.nav}>
                            { nav }
                        </div>
                        <div className={s.social}>
                            { socials }
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.copyright}>
                <div className="container">Copyright - BK17</div>
            </div>
        </footer>
    )
}

export default Footer