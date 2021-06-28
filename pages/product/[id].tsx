import { useDispatch } from 'react-redux'
import MainLayout from '../../components/layouts/MainLayout'
import { ProductType } from '../../store/reducers/productsReducer'
import NotFound from '../../components/common/NotFound'
import ProductInfo from '../../components/pages/Product/ProductInfo'
import { FC, useEffect } from 'react'
import s from '../../styles/components/pages/Product/Product.module.scss'
import Gallery from '../../components/pages/Product/Gallery'
import Counter from '../../components/pages/Product/Counter'
import customerActions from '../../store/actionCreators/cutomers'
import fetcher from '../../helpers/fetcher'


type ProductPropsType = {
    product: ProductType
}

const Product: FC<ProductPropsType> = ({ product }) => {
    const dispatch = useDispatch()

    const initialDispatchActions = (product: ProductType | null, count: number, price: number) => {
        dispatch(customerActions.setActiveProductSuccess(product))
        dispatch(customerActions.setProductCountSuccess(count))
        dispatch(customerActions.setTotalPriceSuccess(price))
    }

    useEffect(() => {
        initialDispatchActions(product, 1, info.price)

        return () => {
            initialDispatchActions(null, 0, 0)
            dispatch(customerActions.setDiscountStatus(false))
        }
    }, [])

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
                !product ? <NotFound element='Продукт' /> : (
                    <div className={s.page}>
                        <div className={s.galleryAndCounter}>
                            <Gallery pictures={product?.pictures} />
                            <Counter/>
                        </div>
                        <ProductInfo info={ info } />
                    </div>
                )
            }
        </MainLayout>
    )
}

export const getServerSideProps = async (context: any) => {
    const product = await fetcher(`http://localhost:3000/api/products/${context.params.id}`)

    return {
        props: {
            product
        }
    }
}

export default Product