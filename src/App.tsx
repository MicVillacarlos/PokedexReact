import React, { useState } from 'react';
import Post from './Components/Post';
import './App.css';
import { Form } from './Components/Form'
import HiddenList from './Components/HiddenList';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbar from './Components/Navbar';

function App (){
  const[hiddenPosts,setHiddenPosts] = useState([] as any)
  const [posts, setPosts] = useState([
    {src: process.env.PUBLIC_URL + '/AvatarImages/pikachu.png',name: "Gian", content:"Gwapa kay ka", likes:2,id:1},
    {src:process.env.PUBLIC_URL + '/AvatarImages/bullbasaur.png',name: "Shad", content:"Pogi ko", likes:0,id:2},
    {src:process.env.PUBLIC_URL + '/AvatarImages/charmander.png',name: "Carlos", content:"Hanging around", likes:0,id:3},
    {src:process.env.PUBLIC_URL + '/AvatarImages/snorlax.png',name: "Reyner", content:"Pagod na ako!", likes:0,id:4},
  ])

  type addPostType = {
    post: object;
    src: string;
    name: string;
    content: string;
    likes: number;
    id: number;
  }
  const addPost = (post:addPostType) =>{
    const newPost = {...post}
      setPosts([...posts,newPost])
  } 

  type hidePostType={
    id: number;
    src: string;
    name: string;
    content: string;
    likes: number;
  }

  const hidePost =(post:hidePostType)=>{
    const updatedPosts = posts.filter(item => item.id !== post.id)
    setPosts(updatedPosts)
    setHiddenPosts([...hiddenPosts,post])
  }

  const unHidePost = (post:any)=>{
    const updatedPosts = hiddenPosts.filter((item:any) => item.id !== post.id)
    setHiddenPosts(updatedPosts)
    setPosts([...posts,post])
  }

  return (
    <Router>
      <div>
        {/* <div className='headerImageDiv'>
          <img className='headerImage' data-aos="flip-left" data-aos-duration="2000" src={process.env.PUBLIC_URL + '/AvatarImages/pokemon.png'} alt="pokemon logo" /> */}
          <Form onAdd={addPost}/>
        {/* </div> */}
      </div>
      <Navbar />
      <Switch>
        <Route exact path="/">
         <div className='app'>
          {posts.slice(0,10).map(post => (
            <Post key={post.id} src={post.src} name={post.name} content={post.content} likes={post.likes} onClick={()=>hidePost(post)}/>))}
         </div>
        </Route>
        <Route path="/hidden">
        <div className='app'>
          {hiddenPosts.map((post:any)=>(
          <HiddenList key={post.id} src={post.src} name={post.name} content={post.content} likes={post.likes} onClick={()=>unHidePost(post)} />))}
        </div>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
