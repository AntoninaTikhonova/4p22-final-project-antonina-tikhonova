import React, { useState, useEffect } from 'react'

import { MainLayout } from '../../../../share'
import { Button, Input, Textarea } from '../../../../share/components'

import s from './registration.module.scss'

const Registration = () => {

    const [email, setEmail] = useState ('')
    const [password, setName] = useState ('')
    const [gender, setGender] = useState ('')
    const [comment, setComment] = useState('')
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)
    const [isGenderInvalid, setIsGenderInvalid] = useState(false)
    const [isCommentInvalid, setIsCommentInvalid] = useState(false)

    function validateEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      }
    // попытка отчистить поля формы после onSubmit
    // const firstRef = useRef(null)

    const onSubmit = (event) => {
        event.preventDefault()

        const formData = {
          email,
          password,
        //   gender,
          comment,
        }

        let isValid = true

        if (!validateEmail(formData.email)) {
            setIsEmailInvalid(true)
            isValid = false
        }
        if (formData.password === '' || formData.password.length < 8) {
            setIsPasswordInvalid(true)
            isValid = false
        }
        // if (formData.gender === '') {
        //     setIsGenderInvalid(true)
        //     isValid = false
        // }
        if (formData.comment === '') {
            setIsCommentInvalid(true)
            isValid = false
        }
        
        if (isValid) {
            console.log(formData)
            // попытка отчистить поля формы после onSubmit
            // event.target.reset()
        }
    }
    

    useEffect(() => {}, [email, password, comment])

    return (
        <MainLayout>
            <form className={s.registrstion} onSubmit={onSubmit}>
                <div className={s.text}>Укажите Email:</div>
                <Input
                    // попытка отчистить поля формы после onSubmit
                    // ref={firstRef}
                    value={email}
                    onChange={(event) => {
                        setIsEmailInvalid(false)
                        setEmail(event.target.value)
                    }}
                    isInvalid={isEmailInvalid}
                    errorMessage={'Email некорректный'}
                />
                <div className={s.text}>Придумайте пароль:</div>
                <Input
                    type={password}
                    value={password}
                    onChange={(event) => {
                        setIsPasswordInvalid(false)
                        setName(event.target.value)
                    }}
                    isInvalid={isPasswordInvalid}
                    errorMessage={'Длина пароля 8 символов'}
                />
                
                {/* <div className={s.gender}>
                    <div className={s.text}>Пол</div>
                    <div className={s.container}>
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value={gender}
                            // onClick={(event) => {
                            //     setIsGenderInvalid(false)
                            //     setGender(event.target.value)
                            // }}
                            // isInvalid={isGenderInvalid}
                            // errorMessage={'Укажите пол'}
                        />
                        <label 
                            className={s.label} 
                            for="male">
                                Мужчина
                            </label>
                    </div>
                    <div className={s.container}>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value={gender}
                            // onClick={(event) => {
                            //     setIsGenderInvalid(false)
                            //     setGender(event.target.value)
                            // }}
                            // isInvalid={isGenderInvalid}
                            // errorMessage={'Укажите пол'}
                        />
                        <label 
                            className={s.label} 
                            for="female">
                                Женщина
                            </label>
                    </div>
                </div> */}
                <div className={s.text}>О себе:</div>
                <Textarea 
                    rows={5}
                    value={comment}
                    onChange={(event) => {
                        setIsCommentInvalid(false)
                        setComment(event.target.value)
                    }}
                    isInvalid={isCommentInvalid}
                    errorMessage={'Заполните форму'}
                />
                <Button text='Регистрация' />
            </form>
        </MainLayout>
    )
}

export default Registration