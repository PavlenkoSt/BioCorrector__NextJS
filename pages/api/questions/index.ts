import questions from "../../../data/questions"
import mergeDataForPagination from "../../../helpers/mergeDataForPagination"


const getQuestions = (req: any, res: any) => {
    const {data, pageCount} = mergeDataForPagination(questions)
    
    res.status(200).json({ data: data[req.query.page - 1 || 0], pageCount })
}

export default getQuestions