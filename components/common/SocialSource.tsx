import React from 'react'
import s from '../../styles/components/common/SocialSource.module.scss'


const SocialSource = () => {
    return (
        <div className={s.source}>Оставлен в: 
            <span className={s.social}><img src="/icons/social/fb.png" alt="fb"/> Facebook</span>
        </div>
    )
}

export default SocialSource
