import { NextApiRequest, NextApiResponse } from "next"
import articles from "../../../data/articles"



const getArticle = ({ query: { id } }: NextApiRequest, res: NextApiResponse) => {
    const article = articles.find((article) => article.id === +id)
    
    if (article) {
        res.status(200).json(article)
    }else{
        res.status(200).json({})
    }
}

export default getArticle