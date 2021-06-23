import s from '../../../styles/components/pages/Home/WhatFor.module.scss'


const WhatFor = () => {
    return (
        <section>
            <h2 className='title'>Зачем он необходим?</h2>
            <div className={s.cards}>
                <div className={s.card}>
                    <div className={s.pic}>
                        <img src="/home/what-for-1.png" alt="what for?" />
                    </div>
                    <div className={s.text}>Защищает от гипноза, зомбирования, сглаза, порчи, инфернальных сущностей, чужеродных лярв.</div>
                </div>
                <div className={s.card}>
                    <div className={s.pic}>
                        <img src="/home/what-for-2.png" alt="what for?" />
                    </div>
                    <div className={s.text}>Восстановливает внутренний баланс и снижает уровень стресса.</div>
                </div>
                <div className={s.card}>
                    <div className={s.pic}>
                        <img src="/home/what-for-3.png" alt="what for?" />
                    </div>
                    <div className={s.text}>Повышает энергетику и сопротивление внешнему воздействию.</div>
                </div>
                <div className={s.card}>
                    <div className={s.pic}>
                        <img src="/home/what-for-4.png" alt="what for?" />
                    </div>
                    <div className={s.text}>Помогает "притягивать" светлых людей и улушает отношения с окружающими.</div>
                </div>
            </div>
        </section>
    )
}

export default WhatFor