import MainLayout from '../components/layouts/MainLayout'
import React from 'react'
import {useSelector} from 'react-redux'
import { productsSelector } from '../store/selectors/productsSelectors'

const Home = () => {
  const products = useSelector(productsSelector)
  console.log(products)
  
  return (
    <MainLayout title='Главная'>
      HI!
    </MainLayout>
  )
}

export default Home