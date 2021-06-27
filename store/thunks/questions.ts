import fetcher from "../../helpers/fetcher"
import questionsActions from "../actionCreators/questions"
import { ThunkType } from "../reducers"


export const getQuestionsThunk = (): ThunkType => async dispatch => {
    const data = await fetcher('/api/questions')

    if(data){
        await dispatch(questionsActions.setProductsSuccess(data))
    }
}
