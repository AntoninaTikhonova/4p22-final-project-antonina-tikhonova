import React, { useEffect, useState } from "react";
// попытка отчистить поля формы после onSubmit
// import { useRef } from "react";


import MainLayout from "../../../../share/MainLayout/MainLayout";
import { Input, Button, Textarea }  from "../../../../share/components";

import s from './Support.module.scss'

const Support = () => {

    const [email, setEmail] = useState ('')
    const [name, setName] = useState ('')
    const [comment, setComment] = useState('')
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)
    const [isNameInvalid, setIsNameInvalid] = useState(false)
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
          name,
          comment,
        }

        

        let isValid = true

        if (!validateEmail(formData.email)) {
            setIsEmailInvalid(true)
            isValid = false
        }
        if (formData.name === '') {
            setIsNameInvalid(true)
            isValid = false
        }
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
    

    useEffect(() => {}, [email, name, comment])

    return (
        <MainLayout>
            <form className={s.root} onSubmit={onSubmit}>
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
                <div className={s.text}>Укажите имя:</div>
                <Input
                    value={name}
                    onChange={(event) => {
                        setIsNameInvalid(false)
                        setName(event.target.value)
                    }}
                    isInvalid={isNameInvalid}
                    errorMessage={'Введите имя'}
                />
                <div className={s.text}>Ваше сообщение:</div>
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
                <Button text='Отправить' />
            </form>
            
        </MainLayout>

    )
}

export default Support