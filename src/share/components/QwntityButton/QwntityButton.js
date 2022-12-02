import s from './QwntityButton.module.scss'

const QwntityButton = (props) => {
    const {text, onClick} = props
    return(
        <button 
            className={s.button} 
            type='submit'
            onClick={onClick}
            text={text}
        >{text}
        </button>
    )

}

export default QwntityButton