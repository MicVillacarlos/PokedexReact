import React, { FormEvent } from 'react';
import { useState } from 'react';

type formProps={
    onAdd:Function
}

const Form = (props:formProps) => {
    const[name, setName] = useState('');
    const[content, setComment] = useState('');
    const[errors, setError] = useState(' ');

    const formValidation = () => {
        let errors = '';
        if (name.includes('@')){
            errors="do not put '@'" 
        }
        if (content.includes('@')){
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

const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    let id = Math.floor(Math.random()*100)
    e.preventDefault();
    setName('')
    setComment('')
    if(formValidation()){
        props.onAdd({id:id,name,content,src:'./AvatarImages/pokeball.png',likes:0});
    }
}

    return(
        <div data-aos="fade-up" data-aos-duration="2000">
            <form className='form' onSubmit={onSubmit}>

                <h4 className='h4'>Add Pokemon here!</h4>

                <label>Name</label>
                <input name='name' onChange={(event)=>setName(event.target.value)} type="text" value={name} placeholder='Nickname or First Name' required />

                <label>Comment</label>
                <textarea name="content" id='1' onChange={(event)=>setComment(event.target.value)}value={content} placeholder='Add Comment Here' required></textarea>
                <div style={{ color:'red'}}>{errors}</div>

                <button className='formBtn'> Spawn</button>
            </form>
        </div>
    )
}

export default Form