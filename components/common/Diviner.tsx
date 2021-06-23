import s from '../../styles/components/common/Diviner.module.scss'


const Diviner = () => {
    return (
        <div className={s.diviner}>
            <div className={s.line}></div>
            <div className={s.figure}></div>
            <div className={s.line}></div>
        </div>
    )
}

export default Diviner