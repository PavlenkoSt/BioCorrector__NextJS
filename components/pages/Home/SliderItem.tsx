import { FC } from 'react'
import s from '../../../styles/components/pages/Home/Slider.module.scss'
import Button from '../../../components/common/Button'


type SliderItemPropsType = {
    title: string
    desc: string
}

const SliderItem: FC<SliderItemPropsType> = ({ title, desc }) => {
    return (
        <div className={s.slide}>
            <div className={s.pic}>
                <img src="/home/slider.png" alt="slider" />
            </div>
            <div className={s.info}>
                <div className={s.title}>{ title }</div>
                <div className={s.desc}>{ desc }</div>
                <Button
                    href="#"
                    text="Подробнее"
                />
            </div>
        </div>
    )
}

export default SliderItem