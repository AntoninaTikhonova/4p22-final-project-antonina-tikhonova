import s from './button.module.scss'

const Button = (props) => {
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

export default Button