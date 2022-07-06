import React, { useState } from 'react'

import './trending.css'
import { trending } from '../../dummyData'
import Home from '../homes/Home'

const Trending = () => {
    const [items, setItems] = useState(trending)
  return (
    <>
        <div className="trending">
            <Home items={items} />    
        </div>
    </>
  )
}

export default Trending