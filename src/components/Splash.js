import React from 'react';
import { Link } from 'react-router-dom';

import MonkMain from '../assets/images/MonkMain.gif';

const Splash = () => {
  return (
    <div className='container text-center'>
      <img src={MonkMain} alt='Monk is ready!' />
      <br />
      <Link to='/home'>
        <button type='button' className='btn btn-primary'>Proceed</button>
      </Link>
    </div>
  );
};

export default Splash;