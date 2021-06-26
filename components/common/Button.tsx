import React, { FC } from 'react'
import Link from 'next/link'
import s from '../../styles/components/common/Button.module.scss'


type ButtonPropsType = {
    href: string
    text: string
    filled?: boolean
    prevent?: boolean
}

const Button: FC<ButtonPropsType> = ({ href, text, filled = false, prevent = false }) => {
    return (
        <Link href={href}>
            <div onClick={ prevent ? (e) => e.preventDefault() : () => {}} className={`${s.btn} ${filled ? s.filled : ''}`}>
                { text }
            </div>
        </Link>
    )
}

export default Button
