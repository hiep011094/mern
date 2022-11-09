import React from 'react'
import { useSelector } from 'react-redux';
import img_user from "../../../assets/img/common/img_user.png"

const Information = () => {

    const auth = useSelector(state => state.auth);

    const { user } = auth

    // console.log(user)


    return (
        <div className='p-profile__content'>
            <h3 className='c-ttl01'>Edit Information</h3>
            <div className='p-profile__infor'>
                <div className='avatar'>
                    <figure className='img'>
                        <img src={user.avatar ? user.avatar : img_user} alt="avatar" />
                    </figure>
                    <p className='name'>{user.name && user.name}</p>
                </div>
                <div className='infor'>
                    <p className='email'><span>Email :</span> {user.email && user.email}</p>
                    <p className='phone'><span>Phone :</span> {user.phone && user.phone}</p>
                    <p className='address'><span>Address :</span> {user.address && user.address}</p>
                </div>
            </div>
        </div>
    )
}

export default Information