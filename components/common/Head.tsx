import Head from 'next/head'
import { FC } from 'react'


type HeadComponentPropsType = {
    title: string
}

const HeadComponent: FC<HeadComponentPropsType> = ({ title }) => {
    return (
        <Head>
            <title>Биокорректор | { title }</title>
            <meta name="description" content="Home page bio corrector site" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        </Head>
    )
}

export default HeadComponent