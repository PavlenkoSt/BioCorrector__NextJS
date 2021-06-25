import React from 'react'
import MainLayout from '../../components/layouts/MainLayout'
import NotFound from '../../components/common/NotFound'
import { useSelector } from 'react-redux'
import { reviewsSelector } from '../../store/selectors/reviewsSelector'
import { useRouter } from 'next/dist/client/router'
import { ReviewType } from '../../store/reducers/reviewsReducer'
import OurProducts from '../../components/common/OurProducts'
import ContentWindow from '../../components/common/ContentWindow'

const Review = () => {
    const history = useRouter()
    const id = history.query.id

    const reviews = useSelector(reviewsSelector)
    const review = reviews.find((rev: ReviewType) => id && rev.id === +id)

    const nextReview = reviews.find((rev: ReviewType) => id && rev.id === +id + 1) 
        || reviews.find((rev: ReviewType) => rev.id === 0)

    const next = {
        author: nextReview.author,
        id: nextReview.id
    }

    return (
        <MainLayout title='Страница продукта'>
            {
                !review ? <NotFound element='Отзыв' /> : (
                    <>
                        <ContentWindow 
                            author={review.author}
                            text={review.text}
                            date={review.date}
                            next={next}
                        />
                        <OurProducts />
                    </>
                )
            }
        </MainLayout>
    )
}

export default Review
