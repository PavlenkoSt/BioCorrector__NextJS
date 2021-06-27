import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextReviewSelector, targetReviewSelector } from '../../store/selectors/reviewsSelector'
import { useRouter } from 'next/dist/client/router'
import UnitPage from '../../components/pagesTemplates/UnitPage'
import { getTargetReviewThunk } from '../../store/thunks/reviews'

const Review = () => {
    const dispatch = useDispatch()
    const history = useRouter()
    const id = history.query.id as string

    useEffect(() => {
        if(id){
            dispatch(getTargetReviewThunk(id))
        }
    }, [id])

    const review = useSelector(targetReviewSelector)
    const nextReview = useSelector(nextReviewSelector)

    const next = {
        title: nextReview?.author,
        id: nextReview?.id
    }

    const unit = Object.keys(review).length !== 0 ? review : null

    return (
        <UnitPage
            title='Отзывы'
            element='Отзыв'
            next={next}
            unit={unit}
            type='reviews'
        />
    )
}

export default Review
