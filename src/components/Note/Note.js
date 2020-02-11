import React, { useContext } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { AppContext } from '../../context/AppContext';

const OuterContainer = styled.div`
  ${tw`bg-gray-500 border-none p-4 shadow-2xl mt-10`}
`;

const NoteTextArea = styled.textarea`
  ${tw`border-none h-24`}
  width: 600px;
`;

const Note = () => {

  const { setCurrentNote } = useContext(AppContext);

  return (
    <OuterContainer>
      <NoteTextArea placeholder="Take a note" onBlur={(event) => setCurrentNote(event.target.value)}></NoteTextArea>
    </OuterContainer>
  );
}
 
export default Note;