import React from 'react'
import NotesList from '../../components/NotesList/NotesList'
import styled from 'styled-components'

const NotesContainer = styled.section`
  display: flex;
`

const Notes = () => {
  return (
    <NotesContainer>
        <NotesList />
    </NotesContainer>
  )
}

export default Notes
