import { ReviewType } from '../../../store/reducers/reviewsReducer'
import s from '../../../styles/components/pages/Home/Reviews.module.scss'
import ReviewsItem from '../../common/CardItem'
import Button from '../../../components/common/Button'
import { FC, memo } from 'react'


type ReviewsPropsType = {
    reviews: Array<ReviewType>
}

const Reviews: FC<ReviewsPropsType> = ({ reviews }) => {
    const renderedReviews = reviews?.map((review: ReviewType) => <ReviewsItem
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

export default memo(Reviews)