import React from 'react';
import {
  FullScreenImage,
  NotFoundWrapper,
  StyledGoBackButton,
} from './NotFound.styled';

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <StyledGoBackButton to="/">Go back</StyledGoBackButton>
      <FullScreenImage
        src="https://www.cdgi.com/wp-content/uploads/2019/05/404-Pages-1112x556.jpg"
        alt="not found"
      />
    </NotFoundWrapper>
  );
};
