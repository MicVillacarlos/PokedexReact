import React from 'react'
import LikeButton from './LikeButton'
import { BiHide } from "react-icons/bi"

type PostProps = {
    name: string;
    content: string;
    likes: any;
    src: any;
    onClick:any;
}

const Post =(props:PostProps)=>{

    return (
    <div className='post' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="800" >
    <div className='hideBtn' onClick={props.onClick}><BiHide/></div>
        <div className='likesDiv'>
            <img src={props.src} alt="avatar" />
            <h3>{props.name}</h3>
            <p>{props.content}</p>
        </div>
        <p>Number of Likes</p>
        <LikeButton likes={props.likes}/>
    </div>
    )
}

export default Post