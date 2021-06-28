import React, { FC } from 'react'
import UnitPage from '../../components/pagesTemplates/UnitPage'
import fetcher from '../../helpers/fetcher'
import isEmptyObject from '../../helpers/isEmptyObject'
import unitFetchCombine from '../../helpers/unitFetchCombine'
import { ProductType } from '../../store/reducers/productsReducer'
import { ReviewType } from '../../store/reducers/reviewsReducer'



type ReviewPropsType = {
    review: ReviewType
    nextReviewData: {
        title: string
        id: number
    }
    products: Array<ProductType>
}

const Review: FC<ReviewPropsType> = ({ review, nextReviewData, products }) => {
    const unit = isEmptyObject(review) ? null : review

    return (
        <UnitPage
            title='Отзывы'
            element='Отзыв'
            next={nextReviewData}
            unit={unit}
            type='reviews'
            products={products}
        />
    )
}

export const getServerSideProps = async (context: any) => {
    const { unit, next } = await unitFetchCombine('reviews', context.params.id)
    const products = await fetcher('http://localhost:3000/api/products')

    const nextReviewData = {
        title: next?.author,
        id: next?.id
    } 

    return {
        props: {
            review: unit,
            nextReviewData,
            products
        }
    }
}

export default Review
