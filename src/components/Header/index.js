import React from 'react';
import './style.css';

const Header = ({headerHeight}) =>{
  return (
    <header className="header-container" style={{height:headerHeight}}>
        <div className='left-header'>
            <img  className='logo-image' src='https://lh3.googleusercontent.com/CW8cdSS9_3M489_2iwKQOlQGJxsvvCnJdZVfECE7dwEyGTlOjftOW9sKvESf48Bydg5D' alt='logo-image' />
            <div className='abc-bank-label'>ABC BANK</div>
            <div className='control-center'>CONTROL CENTER</div>
        </div>
        <div className='right-header'>
            <img className='squares-image' src='https://image.flaticon.com/icons/svg/59/59628.svg' alt='9-square-image' /> 
            <img className='logged-in-user-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsoakftmf6A5PVKLwpeG-yfLmlXgdMzQeJw-N4dxi0UmYt4bB&s' alt='logged-in-user' />
        </div>
      
    </header>
  );
}

export default Header;
