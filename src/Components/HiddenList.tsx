import React from 'react'
import LikeButton from './LikeButton'
import { BiUndo } from "react-icons/bi"

type HiddenListProps = {
    name: string;
    content: string;
    likes: any;
    src: any;
    onClick:any;
}

const HiddenList =(props:HiddenListProps)=>{

    return (
    <div className='postHidden' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="800" >
    <div className='hideBtn' onClick={props.onClick}><BiUndo/></div>
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

export default HiddenList