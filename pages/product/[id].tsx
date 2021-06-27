import { useRouter } from 'next/dist/client/router'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from '../../components/layouts/MainLayout'
import { ProductType } from '../../store/reducers/productsReducer'
import { productTargetSelector } from '../../store/selectors/productsSelectors'
import NotFound from '../../components/common/NotFound'
import ProductInfo from '../../components/pages/Product/ProductInfo'
import { useEffect } from 'react'
import s from '../../styles/components/pages/Product/Product.module.scss'
import Gallery from '../../components/pages/Product/Gallery'
import Counter from '../../components/pages/Product/Counter'
import customerActions from '../../store/actionCreators/cutomers'
import { getTargetProductThunk } from '../../store/thunks/products'

const Product = () => {
    const dispatch = useDispatch()

    const history = useRouter()
    const id = history.query.id as string

    const initialDispatchActions = (product: ProductType | null, count: number, price: number) => {
        dispatch(customerActions.setActiveProductSuccess(product))
        dispatch(customerActions.setProductCountSuccess(count))
        dispatch(customerActions.setTotalPriceSuccess(price))
    }

    useEffect(() => {
        dispatch(getTargetProductThunk(id))
    }, [id])

    useEffect(() => {
        if(id) {
            initialDispatchActions(product, 1, info.price)
        }

        return () => {
            initialDispatchActions(null, 0, 0)
            dispatch(customerActions.setDiscountStatus(false))
        }
    }, [id])

    const product = useSelector(productTargetSelector)

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

export default Product