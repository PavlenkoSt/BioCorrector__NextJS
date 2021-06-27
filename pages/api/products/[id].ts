import products from "../../../data/products"

type RequestType = {
    query: {
        id: string
    }
}

const getProduct = ({ query: { id } }: RequestType, res: any) => {
    const article = products.find((product) => product.id === +id)
    
    if (article) {
        res.status(200).json(article)
    }else{
        res.status(200).json({})
    }
}

export default getProduct