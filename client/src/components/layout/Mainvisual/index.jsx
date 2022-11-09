import React from 'react'
import { Link } from 'react-router-dom'
import Sliders from '../Slider'
import "./styles.scss";

const Mainvisual = () => {
  return (
    <div className='c-mainvisual'>
        <div className='c-mainvisual__inner'>
            <div className='content'>
                <h2 className='ttl'>fashion<br/>changing<br/>always</h2>
                <Link to="/" className='c-btn01'>Shop Now</Link>
            </div>
        </div>
        <Sliders />
    </div>
  )
}

export default Mainvisual