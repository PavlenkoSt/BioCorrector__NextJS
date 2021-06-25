import React from 'react'
import { useSelector } from 'react-redux'
import { reviewsSelector } from '../../store/selectors/reviewsSelector'
import { useRouter } from 'next/dist/client/router'
import { ReviewType } from '../../store/reducers/reviewsReducer'
import UnitPage from '../../components/pagesTemplates/UnitPage'

const Review = () => {
    const history = useRouter()
    const id = history.query.id

    const reviews = useSelector(reviewsSelector)
    const review = reviews.find((rev: ReviewType) => id && rev.id === +id)

    const nextReview = reviews.find((rev: ReviewType) => id && rev.id === +id + 1) 
        || reviews.find((rev: ReviewType) => rev.id === 0)

    const next = {
        title: nextReview.author,
        id: nextReview.id
    }

    return (
        <UnitPage
            title='Отзывы'
            element='Отзыв'
            next={next}
            unit={review}
            type='reviews'
        />
    )
}

export default Review
