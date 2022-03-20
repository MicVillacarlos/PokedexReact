import React, { useState } from 'react';

type buttonProps={
    likes: number
}

function LikeButton (props:buttonProps){
    const { likes } = props;
    const [count, setCount] = useState(likes);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div className='likeButtonNum'>
            <span>{count}</span>
            <button onClick={increment}>Like</button>
        </div>
    )   
}

export default LikeButton;