import { ReactNode } from "react"
import Head from 'next/head'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Link from 'next/link'

type MainLayoutPropsType = {
    title: string
    children: ReactNode
}

export default function MainLayout({ title, children }: MainLayoutPropsType){
    return (
        <div className='wrapper'>
            <Head>
                <title>Биокорректор | { title }</title>
                <meta name="description" content="Home page bio corrector site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main className='main'>
                { children }
            </main>
            <Footer/>
        </div>
    )
}