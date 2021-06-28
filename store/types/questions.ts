import { QuestionType } from './../reducers/questionsReducer'

export enum QuestionsActionTypes {
    SET_QUESTIONS = 'SET_QUESTIONS',
}

type setQuestions = {
    type: QuestionsActionTypes.SET_QUESTIONS
    payload: Array<QuestionType>
}

export type QuestionsStateType = {
    questions: Array<QuestionType>
}

export type QuestionsActionCreatorTypes = 
    setQuestions