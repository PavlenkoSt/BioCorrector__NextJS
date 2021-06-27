import products from "../../../data/products"


const getProducts = (req: Request, res: any) => {
    res.status(200).json(products)
}

export default getProducts