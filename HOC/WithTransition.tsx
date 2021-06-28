import React, { FC } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'



type WithTransitionPropsType = {
    keyProp: any
}

const WithTransition: FC<WithTransitionPropsType> = ({ keyProp, children }) => {
    return (
        <SwitchTransition>
            <CSSTransition classNames='portion' timeout={300} key={keyProp}>
                { children }
            </CSSTransition>
        </SwitchTransition>
    )
}

export default WithTransition