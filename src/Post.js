import React from 'react'
import LikeButton from './LikeButton'

const Post =({name, content,likes,src})=>{
    
        return (
            <div className='post'>
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