import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { showErr, showSuccsess } from "../../../utils/Notification"
import "./styles.scss";

const ActivationEmail = ({handleBtnAuth}) => {
    const { activation_token } = useParams()
    const [err, setErr] = useState('')
    const [succsess, setSuccsess] = useState('')

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios.post('/api/v1/user/activate', { activation_token })
                    setSuccsess(res.data.msg)
                } catch (err) {
                    err.response.data.msg && setErr(err.response.data.msg)
                }
            }
            activationEmail()
            console.log(err.response)
        }
    }, [activation_token])


    // console.log(activation_token)
    return (
        <main className='p-activationEmail'>
            <div className='l-container'>
                <h3 className='c-ttl01'>Thank you for signing up for an account with us</h3>
                {succsess && (
                    <>                        
                        {showSuccsess(succsess)}
                        <Link className="c-btn02" to="/auth" onClick={() => handleBtnAuth(true)}>Page Login</Link>
                    </>
                )}

                {err && (
                    <>                        
                        {showErr(err)}
                        <Link className="c-btn02" to="/auth"  onClick={() => handleBtnAuth(false)}>Page Register</Link>
                    </>
                )}

            </div>

        </main>
    )
}

export default ActivationEmail