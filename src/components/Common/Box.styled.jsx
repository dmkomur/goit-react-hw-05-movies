import styled from 'styled-components';
export const StyledBox = styled.div`
  padding: ${props => props.pd}px;
  background-color: ${props => props.color};
  display: ${props => props.dp};
  gap: ${props => props.gap}px;
`;
