import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: bolder;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s ease-in-out;

  &:hover {
    background-color: #E5C9A5;
    color: black;
    box-shadow: 0 0 7px rgba(0,0,0,.2);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #67a1f7;
    color: white;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  box-shadow: 0 0 7px rgba(0,0,0,.2);

  &:hover {
    background-color: #E5C9A5;
    border: none;
  }
`;


export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;