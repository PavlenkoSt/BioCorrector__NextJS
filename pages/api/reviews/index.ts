import reviews from "../../../data/reviews"
import mergeDataForPagination from "../../../helpers/mergeDataForPagination"

const getReviews = (req: any, res: any) => {
    const {data, pageCount} = mergeDataForPagination(reviews, req.query.limit)

    res.status(200).json({ data: data[req.query.page - 1 || 0], pageCount })
}

export default getReviews