import React, { useState } from 'react';
import Post from './Post';
import './App.css';
import Form from './Form';

function App (){
  const [posts, setPosts] = useState([
    {src:'./AvatarImages/pikachu.png',name: "Gian", content:"Gwapa kay ka", likes:2,id:1},
    {src:'./AvatarImages/bullbasaur.png',name: "Shad", content:"Pogi ko", likes:0,id:2},
    {src:'./AvatarImages/charmander.png',name: "Carlos", content:"Hanging around", likes:0,id:3},
    {src:'./AvatarImages/snorlax.png',name: "Reyner", content:"Pagod na ako!", likes:0,id:4},
  ])

  const addPost = (post) =>{
    const newPost = {...post}
      setPosts([...posts,newPost])
  }


  return (
    <div>
      <div className='headerImageDiv'>
        <img className='headerImage' data-aos="flip-left" data-aos-duration="2000" src='./AvatarImages/pokemon.png' alt="pokemon logo" />
        <Form onAdd={addPost}/>
      </div>
        <div className='app'>
          {posts.map(post => (
            <Post key={post.id} src={post.src} name={post.name} content={post.content} likes={post.likes}/>
          ))}
        </div>
    </div>
  );
}
export default App;
