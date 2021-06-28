import questions from "../../../data/questions"
import mergeDataForPagination from "../../../helpers/mergeDataForPagination"
import { NextApiRequest, NextApiResponse } from "next"


const getQuestions = (req: NextApiRequest, res: NextApiResponse) => {
    const {data, pageCount} = mergeDataForPagination(questions)
    
    res.status(200).json({ data: data[+req.query.page - 1 || 0], pageCount })
}

export default getQuestions