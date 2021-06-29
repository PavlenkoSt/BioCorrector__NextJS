import React, { FC, memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Diviner from '../../components/common/Diviner'
import MainLayout from '../../components/layouts/MainLayout'
import { QuestionType } from '../../store/reducers/questionsReducer'
import { questionsSelector } from '../../store/selectors/questionsSelectors'
import Question from '../../components/pages/Questions/Question'
import s from '../../styles/components/pages/Questions/Question.module.scss'
import Pagination from '../../components/common/Pagination'
import { getQuestionsThunk } from '../../store/thunks/questions'
import fetcher from '../../helpers/fetcher'
import questionsActions from '../../store/actionCreators/questions'
import WithTransition from '../../HOC/WithTransition'


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

    useEffect(() => {
        dispatch(questionsActions.setQuestionsSuccess(questions))

        return () =>{
            dispatch(questionsActions.setQuestionsSuccess([]))
        } 
    }, [])
    
    const pageChangeHandler = (e: any) => dispatch(getQuestionsThunk(e.selected + 1))

    return (
        <MainLayout 
            title='Вопросы и ответы'
            description='Вопросы о биокорректорах'
            keywords='Ключевые, слова'
        >
            <h2 className="title">Вопросы и ответы</h2>
            <Diviner sm={true} />
                <WithTransition keyProp={renderedQuestions}>
                    <div className={s.section}>
                        { renderedQuestions }
                    </div>
                </WithTransition>
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

export const getServerSideProps = async () => {
    const { data, pageCount } = await fetcher('http://localhost:3000/api/questions')

    return {
        props: {
            questions: data,
            pageCount
        }
    }
}

export default memo(Questions) 
