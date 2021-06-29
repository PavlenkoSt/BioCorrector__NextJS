import { FC, memo, ReactNode } from "react"
import HeadComponent from '../common/Head'
import s from '../../styles/components/common/Order.module.scss'


type EmptyLayoutPropsType = {
    title: string
    children: ReactNode
    description: string
    keywords: string
}

const EmptyLayout: FC<EmptyLayoutPropsType> = ({ title, description, keywords, children }) => {
    return (
        <div className='wrapper'>
            <HeadComponent 
                title={title}
                description={description}
                keywords={keywords}
            />
            <div className="container">
                <div className={s.overlay}>
                    <div className={s.window}>
                        <div className={s.wrapper}>
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(EmptyLayout)