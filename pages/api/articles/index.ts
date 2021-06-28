import { NextApiRequest, NextApiResponse } from "next"
import articles from "../../../data/articles"
import mergeDataForPagination from "../../../helpers/mergeDataForPagination"


const getArticles = (req: NextApiRequest, res: NextApiResponse) => {
    const {data, pageCount} = mergeDataForPagination(articles)

    res.status(200).json({ data: data[+req.query.page - 1 || 0], pageCount })
}

export default getArticles