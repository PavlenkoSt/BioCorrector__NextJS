import { FC } from 'react'
import s from '../../../styles/components/pages/Home/Slider.module.scss'


type SliderItemPropsType = {
    title: string
    desc: string
}

const SliderItem: FC<SliderItemPropsType> = ({ title, desc }) => {
    return <div className={s.slide}>
        <div className={s.pic}>
            <img src="/intro/slider.png" alt="slider" />
        </div>
        <div className={s.info}>
            <div className={s.title}>{ title }</div>
            <div className={s.desc}>{ desc }</div>
            <a href="#" className={s.button}>Подробнее</a>
        </div>
    </div>
}

export default SliderItem