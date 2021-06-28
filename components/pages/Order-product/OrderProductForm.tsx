import React, { FC, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import FieldCreator from '../../common/FieldCreator'
import s from '../../../styles/components/common/Order.module.scss'
import FieldRadioCreator from '../../common/FieldRadioCreator'
import { useDispatch } from 'react-redux'
import customerActions from '../../../store/actionCreators/cutomers'


type OrderProductFormPropsType = {
    setIsOrdered: (status: boolean) => void
}

const OrderProductForm: FC<OrderProductFormPropsType> = ({ setIsOrdered }) => {
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const [activeRadio, setActiveRadio] = useState('NP')

    const validators = { 
        required: true
    }

    const phonePatternValidate = {
        pattern: {
            value: /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/,
            message: 'Номер телефона введен некорректно'
        }
    }

    const onSubmit = (data: SubmitDataType) => {
        console.log(activeRadio);
        console.log(data);

        dispatch(customerActions.setCustomerDataSuccess({
            name: data.name,
            tel: data.tel
        }))
        
        setIsOrdered(true)
    }


    type SubmitDataType = {
        name: string,
        tel: string
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={s.form}
        >
            <div className={s.multilineInpust}>
                <FieldCreator
                    id='inputName'
                    label='Имя'
                    name='name'
                    placeholder='Василий'
                    register={register}
                    validators={validators}
                    error={errors['name']}
                >
                    { errors?.name && <div className={s.error}>Поле не может быть пустым!</div> }
                </FieldCreator>
                <FieldCreator
                    id='inputSurname'
                    label='Фамилия'
                    name='surname'
                    placeholder='Иванов'
                    register={register}
                    validators={validators}
                    error={errors['surname']}
                >
                    { errors?.surname && <div className={s.error}>Поле не может быть пустым!</div> }
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
                <FieldCreator
                    id='inputEmail'
                    label='Электронная почта (Опционально)'
                    name='email'
                    placeholder='example@ya.ru'
                    register={register}
                    type='email'
                />
            </div>
            <div className={s.point}>Цена доставки согласно тарифам перевозчика в Вашем городе</div>
            <div className={s.radios}>
                <FieldRadioCreator
                    state={activeRadio}
                    setState={setActiveRadio}
                    value='NP'
                    label='Новая почта'
                />
                <FieldRadioCreator
                    state={activeRadio}
                    setState={setActiveRadio}
                    value='UP'
                    label='Укр. почта'
                />
            </div>
            <div className={s.point}>Оплата наложенным платежом</div>
            <div className={s.inputsCol}>
                <FieldCreator
                    id='inputCity'
                    label='Город'
                    name='city'
                    placeholder='Номер отделения или адрес'
                    register={register}
                    big={true}
                    validators={validators}
                    error={errors['city']}
                >
                    { errors?.city && <div className={s.error}>Поле не может быть пустым!</div> }
                </FieldCreator>
                <FieldCreator
                    id='inputComment'
                    label='Комментарий (Опционально)'
                    name='comment'
                    placeholder='Оставьте комментарий к заказу'
                    register={register}
                    big={true}
                />
            </div>
            <div className={s.buttons}>
                <button className={`${s.btn} ${s.filled}`} type="submit">Подтвердить заказ</button>
            </div>
        </form>
    )
}

export default OrderProductForm
