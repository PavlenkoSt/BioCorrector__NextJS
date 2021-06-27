import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Diviner from '../../components/common/Diviner'
import MainLayout from '../../components/layouts/MainLayout'
import { QuestionType } from '../../store/reducers/questionsReducer'
import { questionsSelector } from '../../store/selectors/questionsSelectors'
import Question from '../../components/pages/Questions/Question'
import s from '../../styles/components/pages/Questions/Question.module.scss'
import Pagination from '../../components/common/Pagination'
import { getQuestionsThunk } from '../../store/thunks/questions'

const Questions = () => {
    const dispatch = useDispatch()
    const questions = useSelector(questionsSelector)

    useEffect(() => {
        dispatch(getQuestionsThunk())
    }, [])

    const renderedQuestions = questions.map((quest: QuestionType) => <Question
        key={quest.id}
        question={quest.question}
        answear={quest.answear}
    />)
    
    const pageChangeHandler = () => console.log('page changed')

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
                    pageCount={10}
                />
            </div>
            <Diviner/>
        </MainLayout>
    )
}

export default Questions
