import React from 'react'
import "./styles.scss";

const Grid = ({column,children,mr,mrPcS,mrTb,mrSp}) => {  
  return (
    <div className={"c-grid"+(column ? " c-grid--"+column : "")+(mr ? " mr-"+mr:"")+(mrPcS ? " mr_pc_s-"+mrPcS:"")+(mrTb ? " mr_tb-"+mrTb:"")+(mrSp ? " mr_sp-"+mrSp:"")}>{children}</div>
  )
}

export default Grid