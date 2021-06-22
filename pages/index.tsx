import MainLayout from '../components/layouts/MainLayout'
import React from 'react'
import {useSelector} from 'react-redux'
import { productsSelector } from '../store/selectors/productsSelectors'
import Intro from '../components/pages/Home/Intro'
import OurProducts from '../components/common/OurProducts'

const Home = () => {
  const products = useSelector(productsSelector)
  console.log(products)
  
  return (
    <MainLayout title='Главная'>
      <Intro/>
      <OurProducts/>
    </MainLayout>
  )
}

export default Home