import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #003d73;
  color: white;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  & > * {
    text-decoration: none;
    color: white;
    margin-right: 20px;
    font-weight: 800;
    font-size: 26px;
    transition: color 0.3s ease;

    &:hover {
      color: #1ecfd6;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 27px;
  &.active {
    color: #1ecfd6;
  }
`;

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 200px;

  p {
    margin-right: 20px;
  }

  button {
    background-color: #c05640;
    color: white;
    border: none;
    padding: 5px 30px;
    border-radius: 17px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #a94442;
    }
  }
`;

export const LayoutContainer = styled.div`
  & > ${HeaderContainer} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #003d73;
    padding: 20px;
    color: white;
        border-bottom: 5px solid #EDD170
;
}
  }
`;

export const AuthLinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 200px;

  & > * {
    text-decoration: none;
    color: white;
    margin-right: 20px;
    font-weight: 800;
    font-size: 26px;
    transition: color 0.3s ease;

    &:hover {
      color: #1ecfd6;
    }
  }
`;

export const StyledUser = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #edd170;
  margin-right: 20px;
`;
