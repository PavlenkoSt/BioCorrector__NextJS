import articles from "../../../data/articles"


const getArticles = (req: Request, res: Response) => {
    
    //@ts-ignore
    res.status(200).json(articles)
}

export default getArticles