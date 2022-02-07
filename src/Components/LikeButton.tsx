import React, { useState } from 'react';

function LikeButton (props:any){
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