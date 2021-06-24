import React from 'react'
import s from '../../../styles/components/pages/Home/Subscribe.module.scss'
import { useForm } from 'react-hook-form'

const SubscribeForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const validators = { 
        required: true, 
        pattern: { 
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 
            message: "Email введен некорректно!" 
        } 
    }

    const onSubmit = (data: SubmitDataType) => alert(JSON.stringify(data));

    type SubmitDataType = {
        email: string
    }

    return (
        <div className={s.formInner}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={s.form}
            >
                <input 
                    { ...register('email', validators) } 
                    className={s.input} 
                    type="text" 
                    placeholder="Buravchick@gmail.com" 
                />
                {
                    errors?.email ? <div className={s.errorForm}>
                        { errors?.email.type === 'required' && 'Поле не может быть пустым!' }
                        { errors?.email.type === 'pattern' && errors?.email?.message }
                    </div> : ''
                }
                <button className={s.btn} type="submit">Подписаться</button>
            </form>
        </div>
    )
}

export default SubscribeForm
