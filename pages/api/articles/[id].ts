import articles from "../../../data/articles"

type RequestType = {
    query: {
        id: string
    }
}

const getArticles = ({ query: { id } }: RequestType, res: Response) => {
    const article = articles.find((article) => article.id === +id)
    
    if (article) {
        //@ts-ignore
        res.status(200).json(article)
    }else{
        //@ts-ignore
        res.status(200).json({})
    }
}

export default getArticles