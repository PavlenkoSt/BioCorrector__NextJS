import articles from "../../../data/articles"

type RequestType = {
    query: {
        id: string
    }
}

const getArticle = ({ query: { id } }: RequestType, res: any) => {
    const article = articles.find((article) => article.id === +id)
    
    if (article) {
        res.status(200).json(article)
    }else{
        res.status(200).json({})
    }
}

export default getArticle