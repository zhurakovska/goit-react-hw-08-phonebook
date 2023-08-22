import {
  AuthLinksContainer,
  Nav,
  NavLinkStyled,
} from 'components/Layout/Layout.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

export const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
      {!isLoggedIn ? (
        <AuthLinksContainer>
          <NavLinkStyled to="/reg">Register</NavLinkStyled>
          <NavLinkStyled to="/login">Login</NavLinkStyled>
        </AuthLinksContainer>
      ) : (
        <UserMenu />
      )}
    </Nav>
  );
};
