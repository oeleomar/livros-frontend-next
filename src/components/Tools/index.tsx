import { useState } from 'react';
import * as S from './styles'
import ReactModal from 'react-modal';

export interface ToolsProps {
  handleEdit: () => void;
  id: string;
}

export const Tools = ({handleEdit, id} : ToolsProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleDelete = async () => { 
      try {
        await fetch(`https://api-book.eleomardorneles.com.br/api/book/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }) 
      alert('Livro excluido com sucesso')
      setIsOpen(false)

      }catch(error) {
        alert('Erro ao excluir livro, tente novamente mais tarde')
        setIsOpen(false)
      }
    }
  

  return (
    <S.ToolsContainer>
      <ReactModal
        contentLabel="Delete Modal"
        isOpen={modalIsOpen} 
        style={customStyles}
        onRequestClose={() => setIsOpen(false)} 
        ariaHideApp={false}>
          <h2>Excluir Livro</h2>
          <p>Deseja realmente excluir esse livro?</p>
          <S.ButtonContainer>
            <button className='delete' onClick={handleDelete}>Sim</button>
            <button onClick={() => {setIsOpen(false)}}>Não</button>
          </S.ButtonContainer>
        </ReactModal>
      <i className='bx bx-edit' onClick={handleEdit}></i>
      <i className='bx bx-trash' onClick={() => setIsOpen(true)}></i>
     </S.ToolsContainer>
  );
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '4rem 6rem',
    transform: 'translate(-50%, -50%)',
  },
};
