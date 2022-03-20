import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
  return <div className='navbar' >
      <Link to="/"><a href="/#">See Pokemons</a></Link>
      <Link to="/hidden"><a href="/#">See Hidden Pokemons</a></Link>
  </div>;
};

export default Navbar;
