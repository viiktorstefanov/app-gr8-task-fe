import React, { useState } from 'react';
import styled from 'styled-components';

import { FaTrash } from "react-icons/fa6";
import { MdModeEditOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const StyledNote = styled.div`
    padding: 1rem 2rem;
    background-color: #e3e846;
    width: 270px;
    height: 200px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const EditIcon = styled(MdModeEditOutline)`
    font-size: 1.5rem;

    &:hover {
        cursor: pointer;
    }
`;

const RemoveIcon = styled(FaTrash)`
    font-size: 1.5rem;

       &:hover {
        cursor: pointer;
    }
`;

const CheckIcon = styled(FaCheck)`
    font-size: 1.5rem;

       &:hover {
        cursor: pointer;
    }
`;




const Note = ( {note, onDelete, onEdit }) => {
    const [ content, setContent ] = useState(note.content);
    const [ isHovered, setIsHovered ] = useState(false);
    const [ isEdited, setIsEdited ] = useState(true);

    const onChange = (e) => {
        setContent(e.target.value);
    };

    const onMouseEnter = () => {
        setIsHovered(true);
    };

    const onMouseLeave = () => {
        setIsHovered(false);
    };
    
    const onEditHandler = () => {
        setIsEdited(true)
    };

    const onCheckHandler = () => {
        onEdit(note.id, content);
        setIsEdited(false);
    }
    
  return (
    <StyledNote onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <NoteField value={content} onChange={onChange} disabled={isEdited}/>
        {isHovered && 
            <IconsWrapper>
                {isEdited ? <CheckIcon onClick={onCheckHandler} /> : <EditIcon onClick={onEditHandler} />}
                <RemoveIcon />
            </IconsWrapper>}
      <p>{note.contnet}</p>
    </StyledNote>
  )
}

export default Note
