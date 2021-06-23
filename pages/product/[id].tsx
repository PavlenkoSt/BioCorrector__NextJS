import { useRouter } from 'next/dist/client/router'
import { useSelector } from 'react-redux'
import MainLayout from '../../components/layouts/MainLayout'
import { ProductType } from '../../store/reducers/productsReducer'
import { productsSelector } from '../../store/selectors/productsSelectors'
import NotFound from '../../components/pages/Product/NotFound'

const Product = () => {
    const history = useRouter()
    const id = history.query.id
    
    const products = useSelector(productsSelector)
    const product = products.find((prod: ProductType) => id && prod.id === +id)
    
    return (
        <MainLayout title='Страница продукта'>
            {
                !product ? <NotFound/> : (
                    <div>
                        
                    </div>
                )
            }
        </MainLayout>
    )
}

export default Product