import { useDispatch } from 'react-redux'
import MainLayout from '../../components/layouts/MainLayout'
import { ProductType } from '../../store/reducers/cutomerReducer'
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

    useEffect(() => {
        dispatch(customerActions.setActiveProductSuccess(product))
        dispatch(customerActions.setProductCountSuccess(1))
        dispatch(customerActions.setTotalPriceSuccess(info.price))
    }, [])

    const info = {
        title: product?.name,
        price: product?.price,
        inStock: product?.inStock,
        chars: product?.characteristics,
        desc: product?.description,
    } 
    
    return (
        <MainLayout 
            title='Страница продукта'
            description={product.shortDescription}
            keywords='Биокор, биокор, ....'
        >
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