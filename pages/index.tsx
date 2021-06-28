import MainLayout from '../components/layouts/MainLayout'
import React, { FC } from 'react'
import Intro from '../components/pages/Home/Intro'
import Slider from '../components/pages/Home/Slider'
import OurProducts from '../components/common/OurProducts'
import Diviner from '../components/common/Diviner'
import WhatFor from '../components/pages/Home/WhatFor'
import Reviews from '../components/pages/Home/Reviews'
import Subscribe from '../components/pages/Home/Subscribe'
import { Element} from 'react-scroll'
import fetcher from '../helpers/fetcher'
import { ReviewType } from '../store/reducers/reviewsReducer'


type HomePropsType = {
    reviews: Array<ReviewType>
}

const Home: FC<HomePropsType> = ({ reviews }) => {  
    return (
        <MainLayout title='Главная'>
            <Intro/>
            <Slider/>
            <Diviner/>
            <Element name='products'>
                <OurProducts/>
            </Element>
            <Diviner/>
            <WhatFor/>
            <Diviner/>
            <Reviews reviews={reviews}/>
            <Diviner/>
            <Subscribe/>
            <Diviner/>
        </MainLayout>
    )
}

export const getServerSideProps = async () => {
    const { data } = await fetcher('http://localhost:3000/api/reviews?limit=2')
    
    return {
        props: {
            reviews: data,
        }
    }
}

export default Home