import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from '../../components/common/CardItem'
import { ReviewType } from '../../store/reducers/reviewsReducer'
import { reviewsSelector } from '../../store/selectors/reviewsSelector'
import ListPage from '../../components/pagesTemplates/ListPage'
import { getReviewsThunk } from '../../store/thunks/reviews'

const Reviews = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReviewsThunk())
    }, [])

    const reviews = useSelector(reviewsSelector)
    const renderedReviews = reviews && reviews.length ? reviews?.map((review: ReviewType) => <CardItem 
        key={review.id}
        id={review.id}
        author={review.author}
        text={review.text}
        date={review.date}
        type='reviews'
    />) : []

    const pageChangeHandler = () => {
        console.log('get new portion reviews from server');
    }

    return (
        <ListPage
            listItems={renderedReviews}
            title='Отзывы'
            pageChangeHandler={pageChangeHandler}
            pageCount={10}
        />
    )
}

export default Reviews
