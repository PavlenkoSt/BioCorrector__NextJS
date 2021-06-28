import reviews from "../../../data/reviews"
import mergeDataForPagination from "../../../helpers/mergeDataForPagination"
import { NextApiRequest, NextApiResponse } from "next"



const getReviews = (req: NextApiRequest, res: NextApiResponse) => {
    const {data, pageCount} = mergeDataForPagination(reviews)

    res.status(200).json({ data: data[+req.query.page - 1 || 0], pageCount })
}

export default getReviews