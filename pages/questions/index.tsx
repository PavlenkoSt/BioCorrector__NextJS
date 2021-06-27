import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Diviner from '../../components/common/Diviner'
import MainLayout from '../../components/layouts/MainLayout'
import { QuestionType } from '../../store/reducers/questionsReducer'
import { questionsSelector } from '../../store/selectors/questionsSelectors'
import Question from '../../components/pages/Questions/Question'
import s from '../../styles/components/pages/Questions/Question.module.scss'
import Pagination from '../../components/common/Pagination'
import { getQuestionsThunk } from '../../store/thunks/questions'
import { Context } from 'next-redux-wrapper'
import fetcher from '../../helpers/fetcher'
import questionsActions from '../../store/actionCreators/questions'


type QuestionPropsType = {
    questions: Array<QuestionType>
    pageCount: number
}

const Questions: FC<QuestionPropsType> = ({ questions, pageCount }) => {
    const dispatch = useDispatch()
    const questionsFromStore = useSelector(questionsSelector)

    const questionsTargetPortion = Object.keys(questionsFromStore).length !== 0 ? questionsFromStore : questions

    const renderedQuestions = questionsTargetPortion?.map((quest: QuestionType) => <Question
        key={quest.id}
        question={quest.question}
        answear={quest.answear}
    />)
      
    //@ts-ignore
    useEffect(() => () => dispatch(questionsActions.setQuestionsSuccess([])), [])
    
    const pageChangeHandler = (e: any) => dispatch(getQuestionsThunk(e.selected + 1))

    return (
        <MainLayout title='Вопросы и ответы'>
            <h2 className="title">Вопросы и ответы</h2>
            <Diviner sm={true} />
            <div className={s.section}>
                { renderedQuestions }
            </div>
            <div className={s.paginationContainer}>
                <Pagination
                    pageChangeHandler={pageChangeHandler}
                    pageCount={pageCount}
                />
            </div>
            <Diviner/>
        </MainLayout>
    )
}

export const getServerSideProps = async (context: Context) => {
    const { data, pageCount } = await fetcher('http://localhost:3000/api/questions')

    return {
        props: {
            questions: data,
            pageCount
        }
    }
}

export default Questions
