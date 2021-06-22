import { FC, ReactNode } from "react"
import Head from 'next/head'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Link from 'next/link'

type MainLayoutPropsType = {
    title: string
    children: ReactNode
}

const MainLayout: FC<MainLayoutPropsType> = ({ title, children }) => {
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
        <div className='wrapper'>
            <Head>
                <title>Биокорректор | { title }</title>
                <meta name="description" content="Home page bio corrector site" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            </Head>
            <Header 
                nav={ renderedNavLinks }
            />
            <main className='main'>
                <div className="container">
                    { children }
                </div>
            </main>
            <Footer 
                nav={ renderedNavLinks }
                socials={ renderSocialLinks }
            />
        </div>
    )
}

export default MainLayout