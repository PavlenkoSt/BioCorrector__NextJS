import React from 'react'
import { useSelector } from 'react-redux'
import Diviner from '../../components/common/Diviner'
import MainLayout from '../../components/layouts/MainLayout'
import ReviewsItem from '../../components/common/ReviewsItem'
import { ReviewType } from '../../store/reducers/reviewsReducer'
import { reviewsSelector } from '../../store/selectors/reviewsSelector'
import s from '../../styles/components/pages/Reviews/Reviews.module.scss'
import Pagination from '../../components/common/Pagination'

const Reviews = () => {
    const reviews = useSelector(reviewsSelector)
    const renderedReviews = reviews.map((review: ReviewType) => <ReviewsItem 
        key={review.id}
        id={review.id}
        author={review.author}
        text={review.text}
        date={review.date}
    />)

    const pageChangeHandler = () => {
        console.log('get new portion reviews from server');
    }

    return (
        <MainLayout title='Отзывы'>
            <h2 className='title'>Отзывы</h2>
            <Diviner sm={true} />
            <div className={s.main}>
                <div className={s.reviews}>
                    { renderedReviews }
                </div>
                <Pagination
                    pageChangeHandler={pageChangeHandler}
                    pageCount={10}
                />
            </div>
            <Diviner />
        </MainLayout>
    )
}

export default Reviews
