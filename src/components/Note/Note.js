import React, { useContext } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { AppContext } from '../../context/AppContext';

const OuterContainer = styled.div`
  ${tw`bg-gray-500 border-none shadow-2xl mt-10 w-3/5`}
`;

const NoteTextArea = styled.textarea`
  ${tw`border-none h-24 m-4`}
  width: 97%;
`;

const Note = () => {

  const { setCurrentNote, addNote } = useContext(AppContext);
  
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      event.preventDefault();
      console.log('teste')
      addNote(event.target.value);
      event.target.value = "";
    }
  }  

  return (
    <OuterContainer>
      <NoteTextArea placeholder="Take a note" onChange={(event) => setCurrentNote(event.target.value)} onKeyPress={(event) => handleKeyPress(event)}></NoteTextArea>
    </OuterContainer>
  );
}
 
export default Note;