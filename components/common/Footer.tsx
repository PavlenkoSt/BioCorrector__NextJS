import s from '../../styles/components/Footer.module.scss'
import Link from 'next/link'

export default function Footer () {
    const navs = [
        {title: 'Главная', href: '/'},
        {title: 'Статьи', href: '/articles'},
        {title: 'Отзывы', href: '/reviews'},
        {title: 'Вопросы и ответы', href: '/questions'}
    ]

    const renderedNavLinks = navs.map(nav => <Link key={nav.href} href={ nav.href }>{ nav.title }</Link>)

    const socials = [
        {icon: '/icons/socialPlacehold.svg', href: '/1'},
        {icon: '/icons/socialPlacehold.svg', href: '/2'},
        {icon: '/icons/socialPlacehold.svg', href: '/3'},
        {icon: '/icons/socialPlacehold.svg', href: '/4'},
        {icon: '/icons/socialPlacehold.svg', href: '/5'},
        {icon: '/icons/socialPlacehold.svg', href: '/6'},
        {icon: '/icons/socialPlacehold.svg', href: '/7'},
    ]

    const renderSocialLinks = socials.map(social => (
        <Link key={social.href} href={social.href}>
            <img width={20} height={20} src={social.icon} alt='social'/>
        </Link>
    ))

    return (
        <footer className={s.main}>
            <div className={s.content}>
                <div className="container">
                    <div className={s.blocks}>
                        <div className={s.contacts}>
                            <div className={s.tel}>+7 (925) 685-75-88</div>
                            <div className={s.mail}>biokor17@mail.ru</div>
                        </div>
                        <div className={s.nav}>
                            { renderedNavLinks }
                        </div>
                        <div className={s.social}>
                            { renderSocialLinks }
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