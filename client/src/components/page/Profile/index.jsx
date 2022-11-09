import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Topic from '../../contents/Topic';
import ChangePassword from './ChangePassword';
import Edit from './Edit';
import Information from './Information';
import "./styles.scss";

const Profile = () => {
  const data_pages = [{ title: "Home", link: "/" }, { title: "Profile", link: "/profile" }];

  const [tap,setTap] = useState(1);


  return (
    <main className='p-profile'>
      <Topic data_pages={data_pages} />
      <div className='l-container'>
        <div className='p-profile__inner'>
          <ul className='p-profile__sidebar'>          
            <li onClick={()=>setTap(1)}>User information</li>
            <li onClick={()=>setTap(2)}>Change user information</li>
            <li onClick={()=>setTap(3)}>Change password</li>
          </ul>
          <div className='tap_content'>
            {tap === 1 && <Information />}
            {tap === 2 && <Edit />}
            {tap === 3 && <ChangePassword />}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Profile