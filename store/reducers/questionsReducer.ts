import { QuestionsActionCreatorTypes, QuestionsStateType } from './../types/questions'
import { QuestionsActionTypes } from "../types/questions"


const initialState = {
    questions: [] as Array<QuestionType>
}

const questionsReducer = (state = initialState, action: QuestionsActionCreatorTypes): QuestionsStateType => {
    switch(action.type){
        case QuestionsActionTypes.SET_QUESTIONS: {
            return {
                ...state,
                questions: action.payload
            }
        }
        default: 
            return {
                ...state
            }
    }
}

export default questionsReducer


export type QuestionType = {
    id: number
    question: string
    answear: Array<string>
}