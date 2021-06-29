import React, { FC, memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from '../../components/common/CardItem'
import { ReviewType } from '../../store/reducers/reviewsReducer'
import { reviewsSelector } from '../../store/selectors/reviewsSelector'
import ListPage from '../../components/pagesTemplates/ListPage'
import { getReviewsThunk } from '../../store/thunks/reviews'
import fetcher from '../../helpers/fetcher'
import isEmptyObject from '../../helpers/isEmptyObject'
import reviewsActions from '../../store/actionCreators/reviews'


type ReviewsPropsType = {
    reviews: Array<ReviewType>
    pageCount: number
}

const Reviews: FC<ReviewsPropsType> = ({ reviews, pageCount}) => {
    const dispatch = useDispatch()

    const reviewsFromStore = useSelector(reviewsSelector)
    const reviewsTargetPortion = isEmptyObject(reviewsFromStore) ? reviews : reviewsFromStore

    const renderedReviews = reviewsTargetPortion?.map((review: ReviewType) => <CardItem 
        key={review.id}
        id={review.id}
        author={review.author}
        text={review.text}
        date={review.date}
        type='reviews'
    />)

    const pageChangeHandler = (e: any) => dispatch(getReviewsThunk(e.selected + 1))

    useEffect(() => {
        dispatch(reviewsActions.setReviewsSuccess(reviews))

        return () => {
            dispatch(reviewsActions.setReviewsSuccess([]))
        }
    }, [])

    return (
        <ListPage
            listItems={renderedReviews}
            title='Отзывы'
            pageChangeHandler={pageChangeHandler}
            pageCount={pageCount}
            description='Отзывы о биокорр...'
            keywords='Ключевые, слова, о, биокорр...'
        />
    )
}

export const getServerSideProps = async () => {
    const { data, pageCount } = await fetcher('http://localhost:3000/api/reviews')

    return {
        props: {
            reviews: data,
            pageCount
        }
    }
}

export default memo(Reviews)
