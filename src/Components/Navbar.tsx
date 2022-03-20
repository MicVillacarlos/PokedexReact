import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
  return <div className='navbar' >
      <Link to="/"><a>See Pokemons</a></Link>
      <Link to="/hidden"><a>See Hidden Pokemons</a></Link>
  </div>;
};

export default Navbar;
