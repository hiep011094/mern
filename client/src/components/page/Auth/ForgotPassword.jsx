import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { showErr, showSuccsess } from "../../../utils/Notification";

const ForgotPassword = () => {
    const [input, setInput] = useState({
        email: ""
    })

    const [showMessge, setShowMessge] = useState({
        success: "",
        err: ""
    })

    const handleChangeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        try {
            const res = await axios.post('/api/v1/user/forgot', {email})
            setShowMessge((e) => ({
                e,
                success: res.data.msg && (res.data.msg)
            }))
        } catch (error) {
            setShowMessge((e) => ({
                e,
                err: error.response.data.msg && (error.response.data.msg)
            }))
        }
    }

    return (
        <main className='p-forgotpassword'>
            <div className='l-container'>
                <h3 className='c-ttl01'>Forgot Password</h3>
                <form className='formforgot' onSubmit={handleSubmit}>
                    {showMessge.err && showErr(showMessge.err)}
                    {showMessge.success && showSuccsess(showMessge.success)}
                    <div className='formforgot__item'>
                        <label htmlFor="email">Email: </label>
                        <input onChange={handleChangeInput} id="email" type="email" name='email' placeholder='email' value={input.email} />
                    </div>
                    <button className='c-btn02'>
                        Forgot Password
                    </button>
                </form>
            </div>

        </main>
    )
}

export default ForgotPassword