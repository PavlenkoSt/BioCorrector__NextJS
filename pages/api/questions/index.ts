import questions from "../../../data/questions"


const getQuestions = (req: Request, res: any) => {
    res.status(200).json(questions)
}

export default getQuestions