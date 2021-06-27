import reviews from '../../../data/reviews'

type RequestType = {
    query: {
        id: string
    }
}

const getReview = ({ query: { id } }: RequestType, res: any) => {
    const review = reviews.find((review) => review.id === +id)
    
    if (review) {
        res.status(200).json(review)
    }else{
        res.status(200).json({})
    }
}

export default getReview