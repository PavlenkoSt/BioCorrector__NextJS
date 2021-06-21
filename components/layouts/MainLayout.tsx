import { ReactNode } from "react"
import  Head  from 'next/head'


type MainLayoutPropsType = {
    title: string
    children: ReactNode
}

export default function MainLayout({ title, children }: MainLayoutPropsType){
    return (
        <>
            <Head>
                <title>Биокорректор | {title}</title>
                <meta name="description" content="Home page bio corrector site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            { children }
        </>
    )
}