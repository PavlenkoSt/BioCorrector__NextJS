import { FC } from 'react'
import s from '../../styles/components/common/Order.module.scss'
import Link from 'next/link'


type OrderPropsType = {
    title: string
    subtitle: string
    copy: string
}

const Order: FC<OrderPropsType> = ({ title, subtitle, copy }) => {
    return (
        <div className={s.overlay}>
            <div className={s.window}>
                <div className={s.wrapper}>
                    <h2 className={s.title}>{ title }</h2>
                    <p className={s.subtitle}>{ subtitle }</p>
                    <form>
                        <div className={s.inputs}>
                            <div className={s.inpItem}>
                                <label htmlFor="inputName">Имя</label>
                                <input name='name' id='inputName' placeholder='Василий Иванович'/>
                            </div>
                            <div className={s.inpItem}>
                                <label htmlFor="inputTel">Телефон</label>
                                <input type='tel' name='tel' id='inputTel' placeholder='+ 380 (678) 555 - 43 - 23'/>
                            </div>
                        </div>
                        <div className={s.buttons}>
                            <Link href='/'>
                                <button className={s.btn} type="reset">Отмена</button>
                            </Link>
                            <button className={`${s.btn} ${s.filled}`} type="submit">Подтвердить</button>
                        </div>
                    </form>
                    <div className={s.copy}>{ copy }</div>
                </div>
            </div>
        </div>
    )
}

export default Order