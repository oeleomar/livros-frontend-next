'use client'
import Image from 'next/image';
import * as S from './styles'
import { Tools } from '../Tools';
import ReactModal from 'react-modal';
import { useEffect, useState } from 'react';
import { regexISBN } from '@/utils/regex-ISBN';

export type BookProps = {
  book: {
    id: string;
    name: string;  
    author: string;
    isbn: string;
  },
  editState?: boolean;
};

export const Book = ({book, editState}: BookProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(book.name);
  const [author, setAuthor] = useState(book.author);
  const [isbn, setIsbn] = useState(book.isbn);
  const [error, setError] = useState('');

  const handleEdit = () => { 
    setIsOpen(true);
   }

  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if(book.name === name && book.author === author && book.isbn === isbn) {
      return alert('Nenhum dado foi alterado')
    }

    if(name.length < 3) {
      setError('Nome deve ter no mínimo 3 caracteres')
    } else if (author.length < 3) {
      setError('Autor deve ter no mínimo 3 caracteres')
    } else if (isbn.length < 10) {
      setError('ISBN deve ter no mínimo 10 caracteres')
    } else {
      setError('')
    }

    if(isbn.length < 10 || !regexISBN.test(isbn.replaceAll('-', ''))) {
      return setError('ISBN inválido')
    }

    try {
      await fetch(`https://api-book.eleomardorneles.com.br/api/book/${book.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          author,
          isbn
        })
      }) 
      alert('Livro editado com sucesso')
      setIsOpen(false)
    }catch(error) {
      alert('Erro ao editar livro, tente novamente mais tarde')
    }
  }
  
  return (<>
    <ReactModal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setIsOpen(false)} ariaHideApp={false}>
      <h2>Editar Livro</h2>
      <p>Obs: a capa do livro é buscada automaticamente pelo ISBN</p>
      <S.Form onSubmit={handleSubmit}>
        <S.Error>{error}</S.Error>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" placeholder={book.name} onBlur={(e) => {
          setName(e.currentTarget.value)
          setError('')
        }}/>
        <label htmlFor="author">Autor</label>
        <input type="text" name="author" id="author" placeholder={book.author} onBlur={(e) => {
          setAuthor(e.currentTarget.value)
          setError('')
        }}/>
        <label htmlFor="isbn">ISBN</label>
        <input type="text" name="isbn" id="isbn" placeholder={book.isbn} onBlur={(e) => {
          setIsbn(e.currentTarget.value)
          setError('')
          }} />
        <button type="submit" disabled={error ? true : false}>Salvar</button>
      </S.Form>
    </ReactModal>
    <S.Book>
      {editState && <Tools handleEdit={handleEdit} id={book.id}/>}
      <Image src={
        regexISBN.test(book.isbn.replaceAll('-', '')) ?`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`: '/no_image.jpg'
      } width={250} height={200} alt='No image' style={{objectFit: 'cover'}} />
      <S.BookInfo>
        <S.BookTitle>{book.name}</S.BookTitle>
        <div>
          <S.BookAuthor>{book.author}</S.BookAuthor>
          <S.BookISBN>ISBN: {book.isbn}</S.BookISBN>
        </div>
      </S.BookInfo>
    </S.Book>
    </>  
  );
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '2rem',
    width: '50%',
    maxWidth: '500px',
    transform: 'translate(-50%, -50%)',
  },
};
