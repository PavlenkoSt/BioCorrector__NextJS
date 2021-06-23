import MainLayout from '../components/layouts/MainLayout'
import React from 'react'
import Intro from '../components/pages/Home/Intro'
import Slider from '../components/pages/Home/Slider'
import OurProducts from '../components/common/OurProducts'
import Diviner from '../components/common/Diviner'
import WhatFor from '../components/pages/Home/WhatFor'
import Reviews from '../components/pages/Home/Reviews'
import Subscribe from '../components/pages/Home/Subscribe'

const Home = () => {  
    return (
        <MainLayout title='Главная'>
            <Intro/>
            <Slider/>
            <Diviner/>
            <OurProducts/>
            <Diviner/>
            <WhatFor/>
            <Diviner/>
            <Reviews/>
            <Diviner/>
            <Subscribe/>
            <Diviner/>
        </MainLayout>
    )
}

export default Home