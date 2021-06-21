import MainLayout from '../components/layouts/MainLayout'
import React from 'react'
import {useSelector} from 'react-redux'

export default function Home() {
  //@ts-ignore
  const {products} = useSelector(state => state)
  console.log(products)
  
  return (
    <MainLayout title='Главная'>
      HI!
    </MainLayout>
  )
}
