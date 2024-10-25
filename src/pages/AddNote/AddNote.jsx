import React, { useState } from 'react';
import styled from 'styled-components';
import { addNote } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const AddForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 2rem;
`;

const NoteField = styled.textarea`
  width: 250px;
  height: 150px;
  border-radius: 8px;
  border: none;
  background-color: #e3e846;
  padding: 1rem;
  align-text: center;

  &:focus {
    outline: none;
  }

`;

const SubmitBtn = styled.button`
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 8px;
  outline: none;
  border: none;
  width: fit-content;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

`;

const AddNote = () => {
  const [ note, setNote ] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
    setNote(e.target.value)
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await addNote(note);

    navigate('/');
  }


  return (
   <AddForm onSubmit={onSubmit}>
      <NoteField value={note} onChange={onChange} maxLength={300}/>
      <SubmitBtn>SAVE</SubmitBtn>
   </AddForm>
  )
}

export default AddNote
