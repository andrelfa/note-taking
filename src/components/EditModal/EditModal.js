import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const OuterContainer = styled.div`
  ${tw`left-0 right-0 bottom-0 top-0 absolute flex items-center justify-center`}
  background: rgba(255, 250, 215, 0.80);
`;

const InnerContainer = styled.div`
  ${tw`w-3/5 text-center`}
  background: #a0aec0;
`;  

const NoteTextArea = styled.textarea`
  ${tw`border-none h-24 m-4`}
  width: 97%;
  height: 250px;
`;

const SaveButton = styled.button`
  ${tw`mb-5 border-none overflow-hidden relative inline-flex uppercase items-center justify-center shadow-2xl cursor-pointer`}
  transition: all .45s ease-Out;
  height: 40px;
  width: 150px;
  color: #fff;
  background: #c0a0a0;  
`;

const EditModal = ({ noteToEdit, closeModal, onNoteChange }) => {

  const [editedText, setEditedText] = useState(noteToEdit?.text);

  const changeNote = (id, text) => {
    onNoteChange(id, text || noteToEdit.text);
    setEditedText(text || noteToEdit.text);
    closeModal();
  }

  return (  
      <OuterContainer onClick={closeModal}>
        <InnerContainer onClick={(e) => e.stopPropagation()}>
          <NoteTextArea defaultValue={noteToEdit.text} onChange={event => changeNote(noteToEdit.id, event.target.value)} />
          <SaveButton onClick={event => changeNote(noteToEdit.id, editedText)}>
            Save
          </SaveButton>
        </InnerContainer>
      </OuterContainer>
  );
}
 
export default EditModal;