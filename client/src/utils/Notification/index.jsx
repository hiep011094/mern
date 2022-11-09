import React from 'react'
import './styles.scss'

export const showErr = (msg) => {
  return (
    <div className='c-err'>{msg}</div>
  )
}

export const showSuccsess = (msg) => {
    return (
      <div className='c-success'>{msg}</div>
    )
  }