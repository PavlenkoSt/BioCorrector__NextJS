import fetcher from "../../helpers/fetcher"
import questionsActions from "../actionCreators/questions"
import { ThunkType } from "../reducers"


export const getQuestionsThunk = (page: number = 0): ThunkType => async dispatch => {
    const data = await fetcher(`/api/questions?page=${page}`)

    if(data){
        await dispatch(questionsActions.setQuestionsSuccess(data.data))
    }
}
