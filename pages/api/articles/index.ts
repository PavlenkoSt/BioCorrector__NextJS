import articles from "../../../data/articles"
import mergeDataForPagination from "../../../helpers/mergeDataForPagination"


const getArticles = (req: any, res: any) => {
    const {data, pageCount} = mergeDataForPagination(articles)

    res.status(200).json({ data: data[req.query.page - 1 || 0], pageCount })
}

export default getArticles