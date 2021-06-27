import reviews from "../../../data/reviews"

const getReviews = (req: Request, res: any) => {
    res.status(200).json(reviews)
}

export default getReviews