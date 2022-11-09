import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { showErr, showSuccsess } from "../../../utils/Notification";

const ChangePassword = () => {
  const token = useSelector(state => state.token)
  const [input, setInput] = useState({
    curent_password: "",
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

  const handleSubmitChangePassword = async(e) => {
    e.preventDefault()
    const password = e.target.password.value
    const curent_password = e.target.curent_password.value
    if (password.length < 6)
      return setShowMessge({ ...showMessge, err: "CPassword must be at least 6 characters." })
    if (password !== e.target.confirm_password.value)
      return setShowMessge({ ...showMessge, err: "Confirm password is not correct" })

    try {
      const res = await axios.patch('/api/v1/user/update_password', { curent_password, password }, {
        headers: { Authorization: token }
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
    <div className='p-profile__content'>
      <div className='p-profile__edit'>
        <p className='c-ttl01'>Change password</p>
        {showMessge.err && showErr(showMessge.err)}
        {showMessge.success && showSuccsess(showMessge.success)}
        <form className='form_profile' onSubmit={handleSubmitChangePassword}>
          <div className='form_item'>
            <label className='label' htmlFor="curent_password">Current password: </label>
            <input onChange={handleInput} type="password" id="curent_password" name='curent_password' placeholder='Current password...' value={input.curent_password} />
          </div>
          <div className='form_item'>
            <label className='label' htmlFor="password">New password: </label>
            <input onChange={handleInput} type="password" id="password" name='password' placeholder='New password...' value={input.password} />
          </div>
          <div className='form_item'>
            <label className='label' htmlFor="confirm_password">Confirm password: </label>
            <input onChange={handleInput} type="password" id="confirm_password" name='confirm_password' placeholder='Confirm password...' value={input.confirm_password} />
          </div>
          <div className='form_item'>
            <button className='c-btn02'>Change Password</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default ChangePassword