import React from 'react'
import "./styles.scss";


const NotFound = () => {
  return (
    <main className='p-notfound'>
      <div className='l-container'>
        <h2 className='c-ttl01'>Not Found</h2>
        <p>You can return to the homepage</p>
        <a className="c-btn02" href="/">Back to home page</a>
      </div>
    </main>
  )
}

export default NotFound