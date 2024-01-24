import { useState } from "react";
import ReactModal from "react-modal";
import * as S from "./styles";
import { regexISBN } from "@/utils/regex-ISBN";

export type AddNewBookProps = {
  modalIsOpen: boolean;
  setIsOpen: (modalIsOpen: boolean) => void;
}

export const AddNewBook = ({modalIsOpen, setIsOpen}: AddNewBookProps) => {
  
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if(name.length < 3) {
      return setError('Nome deve ter no mínimo 3 caracteres')
    } else if (author.length < 3) {
      return setError('Autor deve ter no mínimo 3 caracteres')
    } else if (isbn.length < 10) {
      return setError('ISBN deve ter no mínimo 10 caracteres')
    } else {
      setError('')
    }

    if(isbn.length < 10 || !regexISBN.test(isbn.replaceAll('-', ''))) {
      return setError('ISBN inválido')
    }

    try {
      await fetch(`https://api-book.eleomardorneles.com.br/api/book/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          author,
          isbn
        })
      }) 
      alert('Livro criado com sucesso')
      setIsOpen(false)
      setError('')
    }catch(error) {
      alert('Erro ao criar livro, tente novamente mais tarde')
    }
  }

  return (
    <ReactModal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setIsOpen(false)} ariaHideApp={false}>
      <h2>Adicionar um Livro</h2>
      <p>Obs: a capa do livro é buscada automaticamente pelo ISBN</p>
      
      <S.Form onSubmit={handleSubmit}>
        <S.Error>{error}</S.Error>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" placeholder='Senhor dos Anéis' onBlur={(e) => {
          setName(e.currentTarget.value)
          setError('')
        }}/>
        <label htmlFor="author">Autor</label>
        <input type="text" name="author" id="author" placeholder='J. R. R. Martin' onBlur={(e) => {
          setAuthor(e.currentTarget.value)
          setError('')
        }}/>
        <label htmlFor="isbn">ISBN</label>
        <input type="text" name="isbn" id="isbn" placeholder='978-8533613379' onBlur={(e) => {
          setIsbn(e.currentTarget.value)
          setError('')
          }} />
        <button type="submit" disabled={error ? true : false}>Salvar</button>
      </S.Form>
    </ReactModal>
  );
}

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

