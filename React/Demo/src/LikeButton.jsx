import React from 'react'
import { useState } from 'react'

const LikeButton = () => {
    const [like,setLike] = useState(false) 

    const handlelike = () => {
        setLike(!like)
    }

    return (
    <div>
    {
        like ? <i className="fa-solid fa-heart" style={{fontSize:"3rem",color:"red"}} onClick={handlelike}></i> : <i className="fa-regular fa-heart" style={{fontSize:"3rem"}} onClick={handlelike}></i>
    }
        
        
    </div>
  )
}

export default LikeButton