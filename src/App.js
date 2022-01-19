import React, { useState } from 'react';
import Post from './Post';
import './App.css';
import AddPostButton from './AddPostButton';


function App (){
  const [posts, setPosts] = useState([
    {src:'./AvatarImages/pikachu.png',name: "Gian", content:"Gwapa kay ka", likes:2},
    {src:'./AvatarImages/bullbasaur.png',name: "Shad", content:"Pogi ko", likes:0},
    {src:'./AvatarImages/charmander.png',name: "Carlos", content:"Hanging around", likes:0},
    {src:'./AvatarImages/snorlax.png',name: "Reyner", content:"Pagod na ako!", likes:0},
  ])

  const addPost = () => {
    setPosts([...posts, {src:'./AvatarImages/pokeball.png',name: <input type='text'/>, content:<input type='text'/>, likes:2,}])
  }

  return (
    <div className='app'>
      {posts.map(post => (
        <Post src={post.src} name={post.name} content={post.content} likes={post.likes}/>
      ))}
      <AddPostButton onClick={addPost} />
    </div>
  );
}
export default App;
