import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NotFoundWrapper = styled.div`
  background-color: #ffc107;
  background-color: #ffc107;
  padding: 30px;
`;

export const FullScreenImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledGoBackButton = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #003d73;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0878a4;
  }
`;
