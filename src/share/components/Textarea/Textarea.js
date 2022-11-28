import classNames from 'classnames'

import s from './textarea.module.scss'

const Textarea = (props) => {
    
    const { type, rows, value, onChange, isInvalid, errorMessage } = props

    return (
        <div className={s.root}>
            {isInvalid ? <div className={s.errorMsg}>{errorMessage}</div> : null}
            <textarea 
                className={classNames(s.textarea, {[s.invalid] : isInvalid})}
                type={type}
                rows={rows}
                value={value}
                onChange={onChange}
            >
        </textarea>
        </div>
    )
}

export default Textarea