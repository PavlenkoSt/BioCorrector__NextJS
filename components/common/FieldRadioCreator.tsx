import React, { FC } from 'react'
import s from '../../styles/components/common/Order.module.scss'


type FieldRadioCreatorPropsType = {
    state: string
    setState: (value: string) => void
    value: string
    label: string
}

const FieldRadioCreator: FC<FieldRadioCreatorPropsType> = ({ state, setState, value, label }) => {
    return (
        <div 
            onClick={() => setState(value)} 
            className={`${s.radioItem} 
            ${state === value ? s.active : ''}`}
        ><span className={s.radioDOM}></span>{label}</div>
    )
}

export default FieldRadioCreator
