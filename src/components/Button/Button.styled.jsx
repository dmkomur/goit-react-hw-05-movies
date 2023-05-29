import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.theme.lightMainColor};
  border: none;
  border-radius: 12px;
  padding: 4px 16px;
  color: ${props => props.theme.mainText};
  transition: background-color 250ms linear;
  &:hover {
    background-color: ${props => props.theme.mainColor};
  }
  cursor: pointer;
`;
