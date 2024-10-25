import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { editNote, getAllNotes, removeNote } from '../../services/api';
import Note from '../Note/Note';

const GridNoteList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    padding: 1rem 2rem;
`;

const ErrorField = styled.p`
    color: red;
`;

const NotesList = () => {
    const [ notes, setNotes ] = useState(null);
    const [ error , setError ] = useState(null);

    useEffect(() => {

    const fetchNotes = async () => {
        try {
            const response = await getAllNotes();
            setNotes(response);
        } catch ( error ) {
            setError(error.message);
        }
    };

    fetchNotes();

    }, []);

    const onDelete = async (noteId) => {
        try {
            const response = await removeNote(noteId);
            setNotes((prev) => prev.filter((n) => n.id !== noteId));
        } catch (error ) {
            setError(error.message)
        }
    };

    const onEdit = async (noteId, newContent) => {
        try {
            const response = await editNote(noteId, newContent);

            setNotes((prev) => prev.map((n) => n.id === noteId ? response : n));
        } catch (error) {
            setError(error.message)
        }
    };

  return (
    <GridNoteList>
        {notes && notes.length > 0 && notes.map((n) => <Note key={n.id} note={n} onEdit={onEdit} onDelete={onDelete}/>)}
        {!notes && <p>You don't have any notes added yet.</p>}
        {error && <ErrorField>{error}</ErrorField>}
    </GridNoteList>
  )
}

export default NotesList
