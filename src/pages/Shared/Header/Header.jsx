import React from 'react';
import logo from '../../../assets/logo.png';

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='mt-3 text-secondary'>Journalism Without Fear or Favor</p>
            </div>
        </div>
    );
};

export default Header;