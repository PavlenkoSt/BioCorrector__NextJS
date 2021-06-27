import { QuestionType } from "../reducers/questionsReducer"
import { QuestionsActionTypes } from "../types/questions"


const questionsActions = {
    setQuestionsSuccess: (payload: Array<QuestionType>) => ({ type: QuestionsActionTypes.SET_QUESTIONS, payload }),
}

export default questionsActions