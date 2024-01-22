'use client'
import Image from 'next/image';
import * as S from './styles'
import { Tools } from '../Tools';
import { useState } from 'react';

export type BookProps = {
  book: {
    id: string;
    name: string;  
    author: string;
    isbn: string;
  },
  editState?: boolean;
};

export const Book = ({book, editState = false}: BookProps) => {
  const [editStateComponent, setEditState] = useState(editState);

  console.log(editState)
  return (
    <S.Book>
      {editState && <Tools/>}
      <Image src='/no_image.jpg' width={200} height={300} alt='No image'/>
      <S.BookInfo>
        <S.BookTitle>{book.name}</S.BookTitle>
        <S.BookAuthor>{book.author}</S.BookAuthor>
        <S.BookISBN>{book.isbn}</S.BookISBN>
      </S.BookInfo>
    </S.Book>
  );
};
