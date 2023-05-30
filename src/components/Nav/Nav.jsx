import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = () => {
  return (
    <StyledNav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/movies">Movies</NavItem>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  gap: 16px;
`;

const NavItem = styled(NavLink)`
  display: inline-block;
  background-color: ${props => props.theme.lightMainColor};
  border: none;
  border-radius: 12px;
  padding: 4px 16px;
  color: ${props => props.theme.mainText};
  transition: background-color 250ms linear;
  &:hover {
    background-color: ${props => props.theme.mainColor};
  }
  &.active {
    background-color: ${props => props.theme.mainColor};
  }
  cursor: pointer;
`;
