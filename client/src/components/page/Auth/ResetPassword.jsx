import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { showErr, showSuccsess } from "../../../utils/Notification";

const ResetPassword = () => {
    const {reset_token} = useParams()

    const [input, setInput] = useState({
        password: "",
        confirm_password: ""
    })

    const [showMessge, setShowMessge] = useState({
        success: "",
        err: ""
    })

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }



    const handleSubmitReset = async(e) => {
        e.preventDefault()
        const password = e.target.password.value
        if (password.length < 6)
            return setShowMessge({ ...showMessge, err: "CPassword must be at least 6 characters." })
        if (password !== e.target.confirm_password.value)
            return setShowMessge({ ...showMessge, err: "Confirm password is not correct" })

        try {
            const res = await axios.post('/api/v1/user/reset', {password},{
                headers: { Authorization: reset_token }
            })
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
                <h3 className='c-ttl01'>Reset Password</h3>
                {showMessge.err && showErr(showMessge.err)}
                {showMessge.success && showSuccsess(showMessge.success)}
                <form className='form_profile' onSubmit={handleSubmitReset}>
                    <div className='form_item'>
                        <label className='label' htmlFor="password">New password: </label>
                        <input onChange={handleInput} type="password" id="password" name='password' placeholder='New password...' value={input.password} />
                    </div>
                    <div className='form_item'>
                        <label className='label' htmlFor="confirm_password">Confirm password: </label>
                        <input onChange={handleInput} type="password" id="confirm_password" name='confirm_password' placeholder='Confirm password...' value={input.confirm_password} />
                    </div>
                    <button className='c-btn02'>Reset Password</button>
                </form>
            </div>

        </main>
    )
}

export default ResetPassword