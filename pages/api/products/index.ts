import { NextApiRequest, NextApiResponse } from "next"
import products from "../../../data/products"


const getProducts = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(products)
}

export default getProducts