import { useSelector } from 'react-redux'
import { ReviewType } from '../../../store/reducers/reviewsReducer'
import { reviewsSelector } from '../../../store/selectors/reviewsSelector'
import s from '../../../styles/components/pages/Home/Reviews.module.scss'
import ReviewsItem from './ReviewsItem'
import Link from 'next/link'
import Button from '../../../components/common/Button'


const Reviews = () => {
    const reviews = useSelector(reviewsSelector)
    const renderedReviews = reviews
        .reverse()
        .filter((review: ReviewType, i: number) => i < 2)
        .map((review: ReviewType) => <ReviewsItem
            key={review.id}
            author={review.author}
            text={review.text}
            date={review.date}
        />)

    return (
        <section className={s.reviews}>
            <h2 className="title">Отзывы</h2>
            <div className={s.body}>
                { renderedReviews }
            </div>
            <Button
                href='/'
                text='Все озывы'
            />
        </section>
    )
}

export default Reviews