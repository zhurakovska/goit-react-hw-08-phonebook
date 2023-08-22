import { StyledUser, UserMenuContainer } from 'components/Layout/Layout.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/Auth/operations';
import { selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <UserMenuContainer>
      <StyledUser>{name}</StyledUser>
      <button onClick={handleLogout}>Logout</button>
    </UserMenuContainer>
  );
};
