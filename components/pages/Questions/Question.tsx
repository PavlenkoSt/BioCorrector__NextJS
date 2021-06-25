import React, { FC, useState } from 'react'
import s from '../../../styles/components/pages/Questions/Question.module.scss'

type QuestionPropsType = {
    question: string
    answear: Array<string>
}

const Question: FC<QuestionPropsType> = ({ question, answear }) => {

    const [show, setShow] = useState(false)
    const triggerHandler = () => setShow((prev) => !prev)

    return (
        <div className={s.item}>
            <div onClick={triggerHandler} className={`${s.question} ${show ? s.show : ''}`}>{question}</div>
            <div className={`${s.answearWrapper} ${show ? s.show : ''}`}>
                <div className={s.answear}>{answear}</div>
            </div>
        </div>
    )
}

export default Question
