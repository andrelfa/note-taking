import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const OuterContainer = styled.div`
  ${tw`bg-gray-500 border-none p-4 shadow-2xl mt-10`}
`;

const NoteTextArea = styled.textarea`
  ${tw`border-none h-24`}
  width: 600px;
`;

const Note = () => {
  return (
    <OuterContainer>
      <NoteTextArea placeholder="Take a note"></NoteTextArea>
    </OuterContainer>
  );
}
 
export default Note;