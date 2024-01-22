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
  `}
`;

export const BookTitle = styled.h1`
  ${() => css`
    font-size: 1.6rem;
    text-align: right;
    margin: 0
  `}
`;

export const BookAuthor = styled.p`
  ${() => css`
    font-size: 1.2rem;
    text-align: right;
    margin: 0;
  `}
`;

export const BookISBN = styled.p`
  ${() => css`
    font-size: 1rem;
    text-align: left;
  `}
`;