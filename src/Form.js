import React from 'react';
import { useState } from 'react';

const Form = ({onAdd}) => {
const[name, setName] = useState('');
const[content, setComment] = useState('');
const[errors, setError] = useState(' ');

const formValidation = () => {
    let errors = '';
    if (name.includes('@')){
        errors="do not put '@'" 
    }
    if (content.includes('@','!')){
        errors="do not put '@'"
    }
    if(name.includes('!')){
        errors = "do not put '!' on name"
    }
    if (errors){
        setError(errors)
        return false
    }
    setError(errors = '')
    return true
}

const onSubmit = (e) => {
    let id = Math.floor(Math.random()*100)
    e.preventDefault();
    setName('')
    setComment('')
    if(formValidation()){
        onAdd({id:id,name,content,src:'./AvatarImages/pokeball.png',likes:0});
    }
}

    return(
        <div data-aos="fade-up" data-aos-duration="2000">
            <form className='form' onSubmit={onSubmit}>

                <h4 className='h4'>Add Pokemon here!</h4>

                <label>Name</label>
                <input name='name' onChange={(event)=>setName(event.target.value)} type="text" value={name} placeholder='Nickname or First Name' required />

                <label>Comment</label>
                <textarea name="content" id='1' cols="20" onChange={(event)=>setComment(event.target.value)} rows="3"  value={content} placeholder='Add Comment Here' required></textarea>
                <div style={{ color:'red'}}>{errors}</div>

                <button className='formBtn'> Spawn</button>
            </form>
        </div>
    )
}

export default Form