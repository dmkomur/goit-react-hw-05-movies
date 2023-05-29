import styled from 'styled-components';

export const StyledLi = styled.li`
  padding: 4px;
  transition: color 250ms linear;
  &:nth-child(odd) {
    background-color: ${props => props.theme.lightMainColor};
  }
  &:hover {
    color: ${props => props.theme.mainColor};
  }
`;
