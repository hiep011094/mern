import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showErr, showSuccsess } from "../../../utils/Notification";
import { normalizeInput } from "../../../utils/Validation"
import img_user from "../../../assets/img/common/img_user.png"
import { dispatchGetUser, fetchUser } from '../../../redux/actions/authAction';



const Edit = () => {

  const auth = useSelector(state => state.auth)
  const token = useSelector(state => state.token)
  const dispatch = useDispatch()
  const { user } = auth

  const [showMessge, setShowMessge] = useState({
    success: "",
    err: ""
  })


  const [input, setInput] = useState({
    name: user.name,
    phone: user.phone,
    address: user.address,
    avatar: user.avatar
  })

  const handleInput = (e) => {
    const val = e.target.value
    if (e.target.name === "phone") {
      console.log(e.target.name);

      setInput({
        ...input,
        [e.target.name]: normalizeInput(val)
      })
    } else {
      setInput({
        ...input,
        [e.target.name]: val
      })
    }

  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    const file = e.target.file.files[0]
    try {
      // console.log(user.avatar.split("avatar")[1].split(".")[0]);
      let avatar = ""
      let file_old = ""
      if (file) {
        if (user.avatar)
          file_old = `avatar${user.avatar.split("avatar")[1].split(".")[0]}`

        console.log(file_old)

        let formatData = new FormData()
        formatData.append("file_old", file_old)
        formatData.append("file", file)

        const res1 = await axios.post('/api/v1/upload_avatar', formatData, {
          headers: { Authorization: token }
        })
        avatar = res1.data.url;
      }

      const res = await axios.patch('/api/v1/user/update', {
        name: input.name,
        phone: input.phone,
        address: input.address,
        avatar: file ? avatar : user.avatar
      }, {
        headers: { Authorization: token }
      })

      setShowMessge((e) => ({
        e,
        success: res.data.msg
      }))

      if (token) {
        fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      // console.log(showMessge.success)
    } catch (error) {
      // console.log(error)
      setShowMessge((e) => ({
        e,
        err: error.response.data.msg && (error.response.data.msg)
      }))

    }

  }


  const handleChangFile = (e, setInput) => {

    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = function (e) {
      let binaryData = e.target.result
      let base64String = window.btoa(binaryData)
      setInput({ ...input, avatar: `data:image/jpeg;base64,${base64String}` })
    }

    let img = reader.readAsBinaryString(file)
    return img;

  }

  console.log(user.avatar)

  return (
    <div className='p-profile__content'>
      <div className='p-profile__edit'>
        <p className='c-ttl01'>Edit Information</p>
        {showMessge.err && showErr(showMessge.err)}
        {showMessge.success && showSuccsess(showMessge.success)}
        <form encType="multipart/form-data" className='form_profile' onSubmit={handleEditSubmit}>
          <div className='form_item'>
            <label htmlFor='file' className='img'>
              <img src={input.avatar ? input.avatar : img_user} alt="avatar" />
            </label>
            <input
              className='avatar'
              type="file"
              id='file'
              name='file'
              accept="image/*"
              onChange={e => {
                handleChangFile(e, setInput);
              }}
            />
          </div>
          <div className='form_item'>
            <label className='label' htmlFor="name">Full name: </label>
            <input onChange={handleInput} type="text" id="name" name='name' placeholder='Full Name...' value={input.name} />
          </div>
          <div className='form_item'>
            <span className='label'>Email: </span>
            <p className='input_visible'>{user.email && user.email}</p>
          </div>
          <div className='form_item'>
            <label className='label' htmlFor="phone">Phone: </label>
            <input onChange={handleInput} type="text" id="phone" name='phone' placeholder='Phone...' value={input.phone} />
          </div>
          <div className='form_item'>
            <label className='label' htmlFor="address">Full name: </label>
            <input onChange={handleInput} type="text" id="address" name='address' placeholder='Address...' value={input.address} />
          </div>
          <div className='form_item'>
            <button className='c-btn02'>Edit Information</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit