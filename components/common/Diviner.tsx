import { FC } from 'react'
import s from '../../styles/components/common/Diviner.module.scss'


type DivinerPropsType = {
    sm?: boolean
}

const Diviner: FC<DivinerPropsType> = ({ sm }) => {
    return (
        <div className={`${s.diviner} ${sm ? s.sm : ''}`}>
            <div className={s.line}></div>
            <div className={s.figure}></div>
            <div className={s.line}></div>
        </div>
    )
}

export default Diviner