import { Navbar } from 'components/Navbar/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderContainer, LayoutContainer } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Navbar />
      </HeaderContainer>
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
};
