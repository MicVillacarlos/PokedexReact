import React, { useState,useEffect } from 'react';
import Post from './Post';
import './App.css';
import Form from './Form';

function App (){
  const [hiddenPosts, setHiddenPosts] = useState([])
  const [btnGroup,setBtnGroup] = useState(true)
  const [allBtn, setAllBtn] = useState(true)
  const [posts, setPosts] = useState([
    {src:'./AvatarImages/pikachu.png',name: "Gian", content:"Gwapa kay ka", likes:2,id:1},
    {src:'./AvatarImages/bullbasaur.png',name: "Shad", content:"Pogi ko", likes:0,id:2},
    {src:'./AvatarImages/charmander.png',name: "Carlos", content:"Hanging around", likes:0,id:3},
    {src:'./AvatarImages/snorlax.png',name: "Reyner", content:"Pagod na ako!", likes:0,id:4},
  ])

  useEffect(()=>{
    hiddenPosts.length > 0 ? setBtnGroup(false) : setBtnGroup(true)
  },[hiddenPosts.length])

  const addPost = (post) =>{
    const newPost = {...post}
      setPosts([...posts,newPost])
  }

  const hidePost = (id,src,name,content,likes) => {
    const toHidePost = {
      id:id,
      src:src,
      name:name,
      content:content,
      likes:likes
    }
    setHiddenPosts([...hiddenPosts,toHidePost])
    const updatedPosts = posts.filter(posts => posts.id !== id )
    setPosts(updatedPosts)
  }

  const unHidePost = () => {
    const lastPost = hiddenPosts[hiddenPosts.length - 1]
    setPosts([...posts,lastPost])
    hiddenPosts.pop()
  }

  return (
    <div>
      <div className='headerImageDiv'>
        <img className='headerImage' data-aos="flip-left" data-aos-duration="2000" src='./AvatarImages/pokemon.png' alt="pokemon logo" />
        <Form onAdd={addPost}/>
      </div>
      {btnGroup ? 
        <div>
          {allBtn ? 
            <div className='showHiddenHide'><button className='showHiddenHideBtn' onClick={()=>setAllBtn(false)}> Hide All Pokemons</button></div> : 
            <div className='showHiddenHide'><button className='showHiddenHideBtn' onClick={()=>setAllBtn(true)}> Show All Hidden Pokemons</button></div>}
        </div> : <div className='showHiddenHide'><button className='showLastHiddenBtn' onClick={unHidePost}> Show last Hidden</button></div> 
       }

       <div className='app'>
        {allBtn ?  posts.slice(0,10).map(post => (
              <Post key={post.id} src={post.src} name={post.name} content={post.content} likes={post.likes} onClick={()=> hidePost(post.id,post.src,post.name,post.content,post.likes)}/>)): null }
        </div>
    </div>
  );
}
export default App;
