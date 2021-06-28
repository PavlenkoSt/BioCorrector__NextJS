import reviews from '../../../data/reviews'
import { NextApiRequest, NextApiResponse } from "next"


const getReview = ({ query: { id } }: NextApiRequest, res: NextApiResponse) => {
    const review = reviews.find((review) => review.id === +id)
    
    if (review) {
        res.status(200).json(review)
    }else{
        res.status(200).json({})
    }
}

export default getReview