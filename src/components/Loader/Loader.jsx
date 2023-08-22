import React from 'react';
import { RotatingTriangles } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <RotatingTriangles
        visible={true}
        height={80}
        width={80}
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </StyledLoader>
  );
};
