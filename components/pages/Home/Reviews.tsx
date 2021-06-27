import { useDispatch, useSelector } from 'react-redux'
import { ReviewType } from '../../../store/reducers/reviewsReducer'
import { reviewsSelector } from '../../../store/selectors/reviewsSelector'
import s from '../../../styles/components/pages/Home/Reviews.module.scss'
import ReviewsItem from '../../common/CardItem'
import Button from '../../../components/common/Button'
import { useEffect } from 'react'
import { getReviewsThunk } from '../../../store/thunks/reviews'


const Reviews = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReviewsThunk())
    }, [])

    const reviews = useSelector(reviewsSelector)
    const renderedReviews = reviews
        .filter((review: ReviewType, i: number) => i < 2)
        .map((review: ReviewType) => <ReviewsItem
            key={review.id}
            id={review.id}
            author={review.author}
            text={review.text}
            date={review.date}
            type='reviews'
        />)

    return (
        <section className={s.reviews}>
            <h2 className="title">Отзывы</h2>
            <div className={s.body}>
                { renderedReviews }
            </div>
            <Button
                href='/reviews'
                text='Все отзывы'
            />
        </section>
    )
}

export default Reviews