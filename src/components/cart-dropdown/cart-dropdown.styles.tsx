import styled from 'styled-components';

import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.15);
  border-radius: 4px;
  background-color: white;
  top: 120px;
  right: 45px;
  z-index: 5;

  ${BaseButton}, 
  ${GoogleSignInButton}, 
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;