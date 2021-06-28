import React, { FC } from 'react'
import UnitPage from '../../components/pagesTemplates/UnitPage'
import fetcher from '../../helpers/fetcher'
import isEmptyObject from '../../helpers/isEmptyObject'
import { ReviewType } from '../../store/reducers/reviewsReducer'



type ReviewPropsType = {
    review: ReviewType
    nextReviewData: {
        title: string
        id: number
    }
}

const Review: FC<ReviewPropsType> = ({ review, nextReviewData }) => {
    const unit = isEmptyObject(review) ? null : review

    return (
        <UnitPage
            title='Отзывы'
            element='Отзыв'
            next={nextReviewData}
            unit={unit}
            type='reviews'
        />
    )
}

export const getServerSideProps = async (context: any) => {
    const review = await fetcher(`http://localhost:3000/api/reviews/${context.params.id}`)
    const nextReview = await fetcher(`http://localhost:3000/api/reviews/${+context.params.id + 1}`)

    const next = 
        isEmptyObject(nextReview)
            ? await fetcher(`http://localhost:3000/api/reviews/0`)
            : nextReview 

    const nextReviewData = {
        title: next?.author,
        id: next?.id
    } 

    return {
        props: {
            review,
            nextReviewData
        }
    }
}

export default Review
