import s from '../../../styles/components/pages/Home/Intro.module.scss'
import Button from '../../common/Button'
import { Link } from 'react-scroll'
import Image from 'next/image'
import logo from '../../../public/icons/Logo.svg'

const Intro = () => {
    return (
        <section className={s.intro}>
            <div className={s.info}>
                <div className={s.logo}>
                    <Image src={logo} alt="biocorrector" />
                </div>
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
                        prevent={true}
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