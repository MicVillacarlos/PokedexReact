import React, { useState } from 'react';
import Post from './Post';
import './App.css';
import Form from './Form';

function App (){
  const [showPost, setShowPost] = useState(true)
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

  const hidePost =()=>{
    setShowPost(false)
  }

  const showHiddenPost =()=>{
    setShowPost(true)
  }
  
  return (
    <div>
      <div className='headerImageDiv'>
        <img className='headerImage' data-aos="flip-left" data-aos-duration="2000" src='./AvatarImages/pokemon.png' alt="pokemon logo" />
        <Form onAdd={addPost}/>
      </div>

      {showPost ? null : <div className='showHidden'><button className='showHiddenBtn' onClick={showHiddenPost}> show hidden Pokemons</button></div>  }

       <div className='app'>
        {showPost ?  posts.slice(0,10).map(post => (
              <Post key={post.id} src={post.src} name={post.name} content={post.content} likes={post.likes} onClick={hidePost}/>)): null }
        </div>
    </div>
  );
}
export default App;
