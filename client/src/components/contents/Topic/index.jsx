import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"

const Topic = ({data_pages}) => {
  return (
    <div className='c-topic'>
        <ul>
            {data_pages.map((element,index) => 
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            )}
        </ul>
    </div>
  )
}

export default Topic