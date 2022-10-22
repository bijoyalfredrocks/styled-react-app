import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (max-width: 991px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  background: ${({ primary }) => (primary ? '#0275d8' : '#d9534f')};
  white-space: nowrap;
  padding: ${({ large }) => (large ? '18px 100px' : '16px 50px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  float: ${({ alignCenter }) => (alignCenter ? '' : 'right')};
  font-weight:bold;
  outline: none;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const CardWrapper = styled.div`
  padding: 0 0 32px;
  margin: 48px auto 0;
 // font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export default GlobalStyle;
