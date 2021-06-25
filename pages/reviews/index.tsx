import React from 'react'
import { useSelector } from 'react-redux'
import CardItem from '../../components/common/CardItem'
import { ReviewType } from '../../store/reducers/reviewsReducer'
import { reviewsSelector } from '../../store/selectors/reviewsSelector'
import ListPage from '../../components/pagesTemplates/ListPage'

const Reviews = () => {
    const reviews = useSelector(reviewsSelector)
    const renderedReviews = reviews.map((review: ReviewType) => <CardItem 
        key={review.id}
        id={review.id}
        author={review.author}
        text={review.text}
        date={review.date}
        type='reviews'
    />)

    const pageChangeHandler = () => {
        console.log('get new portion reviews from server');
    }

    return (
        <ListPage
            listItems={renderedReviews}
            title='Отзывы'
            pageChangeHandler={pageChangeHandler}
        />
    )
}

export default Reviews
