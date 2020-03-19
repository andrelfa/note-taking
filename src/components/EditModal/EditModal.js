import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const OuterContainer = styled.div`
  ${tw`left-0 right-0 bottom-0 top-0 absolute flex items-center justify-center`}
  background: rgba(255, 250, 215, 0.80);
`;

const InnerContainer = styled.div`
  ${tw`w-3/5`}
  background: #a0aec0;
  height: 250px;
`;  

const NoteTextArea = styled.textarea`
  ${tw`border-none h-24 m-4`}
  width: 97%;
  height: 85%;
`;

const EditModal = ({ noteToEdit, closeModal, onNoteChange }) => {

  console.log('notetoedit', noteToEdit)

  return (  
    noteToEdit ? (
      <OuterContainer onClick={closeModal}>
        <InnerContainer onClick={(e) => e.stopPropagation()}>
          <NoteTextArea defaultValue={noteToEdit.text} onChange={event => onNoteChange(noteToEdit.id, event.target.value)} />
        </InnerContainer>
      </OuterContainer>
    ) : null
  );
}
 
export default EditModal;