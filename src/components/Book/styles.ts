import { css, styled } from 'styled-components';

export const Book = styled.div`
  ${() => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 300px;
    padding: 1rem;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `}
`;

export const BookInfo = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100px;
  `}
`;

export const BookTitle = styled.h2`
  ${() => css`
    font-size: 1.2rem;
    text-align: ;
    margin: 0
  `}
`;

export const BookAuthor = styled.p`
  ${() => css`
    font-size: 1.0rem;
    text-align: right;
    margin: 0;
  `}
`;

export const BookISBN = styled.p`
  ${() => css`
    font-size: 1rem;
    text-align: right;
    margin: 0;
  `}
`;

export const Form = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;

    label {
      font-size: 1rem;
      margin-bottom: 5px;
    }

    input {
      margin-bottom: 20px;
      padding: 3px 10px;
    }
  `}
`;

export const Error = styled.span`
  ${() => css`
    font-size: 0.8rem;
    color: red;
    margin-bottom: 5px;
  `}
`;