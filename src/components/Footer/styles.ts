import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  padding: 4rem;
`;

export const TotalPages = styled.span`
  display: block;
  opacity: 0.8;
`;

export const ActualPage = styled.span`
  display: block;
  margin: 10px 0;
  opacity: 0.8;
`;


export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  button {
    padding: 10px 20px;
    background-color: #64b7cc;
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #5aa5b9;
    }
    
    &:disabled {
      background-color: #eaeaea;
      cursor: not-allowed;
      color: gray;
    }
  }
`;