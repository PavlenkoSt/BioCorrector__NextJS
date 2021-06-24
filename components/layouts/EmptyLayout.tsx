import { FC, ReactNode } from "react"
import HeadComponent from '../common/Head'


type EmptyLayoutPropsType = {
    title: string
    children: ReactNode
}

const EmptyLayout: FC<EmptyLayoutPropsType> = ({ title, children }) => {
    return (
        <div className='wrapper'>
            <HeadComponent title={title}/>
            <div className="container">
                { children }
            </div>
        </div>
    )
}

export default EmptyLayout