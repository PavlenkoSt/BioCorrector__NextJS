import s from '../../../styles/components/pages/Home/Intro.module.scss'
import Button from '../../common/Button'
import { Link } from 'react-scroll'

const Intro = () => {
    return (
        <section className={s.intro}>
            <div className={s.info}>
                <img src="/icons/logo.svg" alt="biocorrector" className={s.logo}/>
                <h2 className={s.title}>Защита от внешнего энергетического воздействия</h2>
                <h3 className={s.subtitle}>Подключек, гипноза, чужеродных лярв и потери энергии</h3>
                <Link 
                    smooth={true} 
                    to='products'
                    offset={-80}
                > 
                    <Button
                        href="#"
                        text="Выбрать биокорректор"
                        filled={true}
                    />
                </Link>
            </div>
            <div className={s.photo}>
                <img src="/home/biocor.png" alt="biocorrector" />
            </div>
        </section>
    )
}

export default Intro