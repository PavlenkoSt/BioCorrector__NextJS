import Link from 'next/link'
import s from '../../styles/components/common/Order.module.scss'
import React from 'react'
import { useForm } from 'react-hook-form'


const OrderForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const validators = { 
        required: true
    }
    const phonePatternValidate = {
        pattern: {
            value: /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/,
            message: 'Номер телефона введен некорректно'
        }
    }

    const onSubmit = (data: SubmitDataType) => alert(JSON.stringify(data));

    type SubmitDataType = {
        name: string,
        tel: string
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className={s.inputs}>
                <div className={s.inpItem}>
                    <label htmlFor="inputName">Имя</label>
                    <input 
                        { ...register('name', validators) }
                        name='name' 
                        id='inputName' 
                        placeholder='Василий Иванович'
                    />
                    { errors?.name && <div className={s.error}>Поле не может быть пустым!</div> }
                </div>
                <div className={s.inpItem}>
                    <label htmlFor="inputTel">Телефон</label>
                    <input 
                        { ...register('tel', { ...validators, ... phonePatternValidate}) }
                        type='tel' 
                        name='tel' 
                        id='inputTel' 
                        placeholder='+ 380 (678) 555 - 43 - 23'
                    />
                    { errors?.tel && <div className={s.error}>
                        { errors?.tel?.type === 'required' && 'Поле не может быть пустым!' }
                        { errors?.tel?.type === 'pattern' && errors.tel.message }
                    </div> }
                </div>
            </div>
            <div className={s.buttons}>
                <Link href='/'>
                    <button className={s.btn} type="reset">Отмена</button>
                </Link>
                <button className={`${s.btn} ${s.filled}`} type="submit">Подтвердить</button>
            </div>
        </form>
    )
}

export default OrderForm
