import React from 'react'
import LikeButton from './LikeButton'

const Post =({name, content,likes,src})=>{
    
        return (
            <div className='post' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000" >
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