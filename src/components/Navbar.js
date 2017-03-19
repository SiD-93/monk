import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar navbar-default navbar-fixed-top navbar-inverse'>
      <Link to='/'>
        <button className='btn btn-primary'>Back</button>
      </Link>
      <Link to='/home'>
        <button className='btn btn-primary'>Home</button>
      </Link>
    </div>
  );
};

export default Navbar;