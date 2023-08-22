import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <div>
        <Link to="/reg">Register</Link>
        <Link to="/login">Login</Link>
      </div>
      <UserMenu />
    </nav>
  );
};
