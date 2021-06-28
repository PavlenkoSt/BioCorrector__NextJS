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
import { ProductType } from '../store/reducers/cutomerReducer'


type HomePropsType = {
    reviews: Array<ReviewType>
    products: Array<ProductType>
}

const Home: FC<HomePropsType> = ({ reviews, products }) => {  
    return (
        <MainLayout title='Главная'>
            <Intro/>
            <Slider/>
            <Diviner/>
            <Element name='products'>
                <OurProducts products={products}/>
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
    const products = await fetcher('http://localhost:3000/api/products')
    
    return {
        props: {
            reviews: data,
            products
        }
    }
}

export default Home