import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='NotFound'>
            <img src="https://blog.webit.ru/wp-content/uploads/2016/04/5d4298d584fc7.png" alt="Not found pages" />
            <div className='btnNOtFound'>
                <Link to='/'> Bosh sahifaga qaytish</Link>
            </div>
    </div>
  )
}

export default NotFound
