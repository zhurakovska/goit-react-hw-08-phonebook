import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      {!isLoggedIn ? (
        <div>
          <Link to="/reg">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      ) : (
        <UserMenu />
      )}
    </nav>
  );
};
