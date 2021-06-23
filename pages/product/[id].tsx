import { useRouter } from 'next/dist/client/router'
import { useSelector } from 'react-redux'
import MainLayout from '../../components/layouts/MainLayout'
import { ProductType } from '../../store/reducers/productsReducer'
import { productsSelector } from '../../store/selectors/productsSelectors'
import NotFound from '../../components/pages/Product/NotFound'
import ProductInfo from '../../components/pages/Product/ProductInfo'
import { useEffect, useState } from 'react'
import s from '../../styles/components/pages/Product/Product.module.scss'
import Gallery from '../../components/pages/Product/Gallery'

const Product = () => {
    const [load, setLoad] = useState(true)
    const [countProd, setCountProd] = useState(1) 

    useEffect(() => setLoad(true), [])

    const history = useRouter()
    const id = history.query.id
    
    const products = useSelector(productsSelector)
    const product = products.find((prod: ProductType) => id && prod.id === +id)

    const info = {
        title: product?.name,
        price: product?.price,
        inStock: product?.inStock,
        chars: product?.characteristics,
        desc: product?.description,
    } 
    
    return (
        <MainLayout title='Страница продукта'>
            {
                !product && !load ? <NotFound/> : (
                    <div className={s.page}>
                        <div className={s.galleryAndCounter}>
                            <Gallery
                                pictures={product?.pictures}
                            />
                        </div>
                        <ProductInfo 
                            info={ info }
                            countProd={countProd}
                        />
                    </div>
                )
            }
        </MainLayout>
    )
}

export default Product