import styled, { createGlobalStyle } from 'styled-components';
export const theme = {
  mainColor: '#FFC107',
  accentColor: '#607D8B',
  lightMainColor: '#FFECB3',
  lightAccentColor: '#757575',
  mainText: '##212121',
};

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export const GlobalStyle = createGlobalStyle`
    box-sizing: content-box;
    body {
        margin: 0;
        padding: 0;
    }
  ul {
  list-style-type: none;
}
a{text-decoration: none}
`;
