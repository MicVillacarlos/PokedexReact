import React, { FormEvent } from 'react';
import { useState } from 'react';
import { FormAdd, Container} from './style'
import  PokemonLogo  from '../../Assets/pokemon.png'

type formProps={
    onAdd:Function
}

export const Form = (props:formProps) => {
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
        <Container>
            <img src={PokemonLogo} alt="skourse-pokemon-logo" />
            <FormAdd onSubmit={onSubmit} data-aos="fade-up" data-aos-duration="2000">
                <h4 className='h4'>Add Pokemon here!</h4>
                <label>Name</label>
                    <input name='name' onChange={(event)=>setName(event.target.value)} type="text" value={name} placeholder='Nickname or First Name' required />
                <label>Comment</label>
                    <textarea name="content" id='1' onChange={(event)=>setComment(event.target.value)}value={content} placeholder='Add Comment Here' required></textarea>
                <div style={{ color:'red'}}>
                    {errors}
                </div>
                <button className='formBtn'> 
                    Spawn
                </button>
            </FormAdd>
        </Container>
    )
}

