import Head from 'next/head'
import { FC, memo } from 'react'


type HeadComponentPropsType = {
    title: string
    description: string
    keywords: string
}

const HeadComponent: FC<HeadComponentPropsType> = ({ title, description, keywords }) => {
    return (
        <Head>
            <title>Биокорректор | { title }</title>
            <meta charSet='UTF-8'/>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        </Head>
    )
}

export default memo(HeadComponent)