import products from "../../../data/products"
import { NextApiRequest, NextApiResponse } from "next"


const getProduct = ({ query: { id } }: NextApiRequest, res: NextApiResponse) => {
    const article = products.find((product) => product.id === +id)
    
    if (article) {
        res.status(200).json(article)
    }else{
        res.status(200).json({})
    }
}

export default getProduct