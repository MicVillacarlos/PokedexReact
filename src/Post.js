import React from 'react'
import LikeButton from './LikeButton'
import { BiHide } from "react-icons/bi"

const Post =({name, content,likes,src,onClick})=>{

    
    
    return (
    <div className='post' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="800" >
    <div className='hideBtn' onClick={onClick}><BiHide/></div>
        <div className='likesDiv'>
            <img src={src} alt="avatar" />
            <h3>{name}</h3>
            <p>{content}</p>
        </div>
        <p>Number of Likes</p>
        <LikeButton likes={likes}/>
    </div>
    )
}

export default Post