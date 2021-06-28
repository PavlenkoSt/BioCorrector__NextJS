import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import s from '../../../styles/components/common/Order.module.scss'
import FieldCreator from '../../common/FieldCreator'


type OrderCallFormPropsType = {
    setIsOrdered: (isOrdered: boolean) => void
}

const OrderCallForm: FC<OrderCallFormPropsType> = ({ setIsOrdered }) => {
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

    const onSubmit = (data: SubmitDataType) => setIsOrdered(true)


    type SubmitDataType = {
        name: string,
        tel: string
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={s.form}
        >
            <div className={s.inputs}>
                <FieldCreator
                    id='inputName'
                    label='Имя'
                    name='name'
                    placeholder='Василий Иванович'
                    register={register}
                    validators={validators}
                    type='text'
                    error={errors['name']}
                >
                    { errors?.name && <div className={s.error}>Поле не может быть пустым!</div> }
                </FieldCreator>
                <FieldCreator
                    id='inputTel'
                    label='Телефон'
                    name='tel'
                    placeholder='+ 380 (678) 555 - 43 - 23'
                    register={register}
                    validators={{...validators, ...phonePatternValidate}}
                    type='tel'
                    error={errors['tel']}
                >
                    { errors?.tel && <div className={s.error}>
                        { errors?.tel?.type === 'required' && 'Поле не может быть пустым!' }
                        { errors?.tel?.type === 'pattern' && errors.tel.message }
                    </div> }
                </FieldCreator>
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

export default OrderCallForm
