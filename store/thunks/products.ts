import fetcher from "../../helpers/fetcher"
import productsActions from "../actionCreators/products"
import { ThunkType } from "../reducers"


export const getProductsThunk = (): ThunkType => async dispatch => {
    const data = await fetcher('/api/products')

    if(data){
        await dispatch(productsActions.setProductsSuccess(data))
    }
}

export const getTargetProductThunk = (id: string): ThunkType => async dispatch => {
    const data = await fetcher(`/api/products/${id}`)

    if(data){
        await dispatch(productsActions.setTargetProductSuccess(data))
    }
}