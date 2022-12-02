import classNames from 'classnames'

import s from './Input.module.scss'

const Input = (props) => {

  const { ref, type, value, onChange, placeholder, isInvalid, errorMessage } = props
  
  return (
    <div className={s.root}>
      {isInvalid ? <div className={s.errorMsg}>{errorMessage}</div> : null}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames(s.inputDefault, { [s.inputError]: isInvalid })}
      />
    </div>
  )
}

export default Input