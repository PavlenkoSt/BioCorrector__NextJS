import React from 'react'
import { useSelector } from 'react-redux'
import Diviner from '../../components/common/Diviner'
import MainLayout from '../../components/layouts/MainLayout'
import ReviewsItem from '../../components/common/ReviewsItem'
import { ReviewType } from '../../store/reducers/reviewsReducer'
import { reviewsSelector } from '../../store/selectors/reviewsSelector'
import s from '../../styles/components/pages/Reviews/Reviews.module.scss'

const Reviews = () => {
    const reviews = useSelector(reviewsSelector)
    const renderedReviews = reviews.map((review: ReviewType) => <ReviewsItem 
        key={review.id}
        id={review.id}
        author={review.author}
        text={review.text}
        date={review.date}
    />)

    return (
        <MainLayout title='Отзывы'>
            <h2 className='title'>Отзывы</h2>
            <Diviner sm={true} />
            <div className={s.reviews}>
                { renderedReviews }
            </div>
        </MainLayout>
    )
}

export default Reviews
