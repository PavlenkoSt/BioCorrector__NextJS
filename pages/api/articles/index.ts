import articles from "../../../data/articles"


const getArticles = (req: Request, res: any) => {
    res.status(200).json(articles)
}

export default getArticles