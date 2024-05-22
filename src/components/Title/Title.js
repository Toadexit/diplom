import React from 'react'
import './Title.css'

function Title({title}) {
  return (
    <div className='wrapper'>
        <div className="text">{title}</div>
        <div class="line_serv"></div>
    </div>
  )
}

export default Title