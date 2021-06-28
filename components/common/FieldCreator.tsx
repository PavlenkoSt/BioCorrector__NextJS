import React, { FC } from 'react'
import s from '../../styles/components/common/Order.module.scss'


type FieldCreatorPropsType = {
    register: any
    validators?: any
    name: string
    id: string
    placeholder: string
    type?: string
    label: string
    error?: any
    big?: boolean 
}

const FieldCreator: FC<FieldCreatorPropsType> = ({ children, register, validators, name, id, label, error, placeholder, big, type = 'text' }) => {
    return (
        <div className={`${s.inpItem} ${error ? s.err : ''} ${big ? s.big : ''}`}>
            <label htmlFor={id}>{ label }</label>
            <input 
                {...register(name, validators)}
                name={ name }
                id={ id }
                placeholder={ placeholder }
                type={ type }
            />
            { children }
        </div>
    )
}

export default FieldCreator
