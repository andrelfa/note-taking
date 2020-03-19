import React, { useContext, useRef, createRef, useState } from 'react';
import marked from 'marked';
import { AppContext } from '../context/AppContext';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useTransition, animated } from 'react-spring';
import EditModal from './EditModal/EditModal';
import { ReactSVG } from 'react-svg'

const OuterContainer = styled.div`
  ${tw`flex items-center justify-between w-3/5 flex-wrap`}
`

const NoteContainer = styled(animated.div)`
  ${tw`my-2 shadow-lg relative`}
  background: #a0aec0;
  color: #fff;
  padding-right: 55px;
  width: 100%;
`

const DeleteBox = styled.div`
  ${tw`justify-center cursor-pointer`}
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  font-style: normal;
  top: 0;
  right: 0;
  width: 30px;
`

const DeleteX = styled.span`
  font-size: 12px;

  svg {
    ${tw`w-4`}
    fill: #fff;
  }
`

const EditBox = styled.div`
  ${tw`justify-center cursor-pointer`}
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  font-stylme pae: normal;
  top: 0;
  right: 30px;
  width: 30px;

  svg {
    ${tw`w-4`}
    fill: #fff;
  }
`

const EditText = styled.span`
  font-size: 12px;
`

const NoteInput = styled.div`
  ${tw`p-3 h-full focus:outline-none w-full inline-block`}
  background: 0;
  border: 0;
  color: #fff;
  font-size: 16px;

  &:focus {
    background: #6482a9;
  }
`

const NotesList = () => {

  const { notes, removeNote } = useContext(AppContext);
  const elementsRef = useRef(notes.map(() => createRef()));
  const [noteToEdit, setNoteToEdit] = useState(null);

  const transition = useTransition(notes, s => s.id, {
    from: { opacity: 0, transform: "translateX(-10px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(10px)" }
  });

  const changeNote = (id, text) => {
    console.log('id', id);
    console.log('event', text);
    let editedNotes = [...notes];
    let index = editedNotes.findIndex(note => note.id === id);
    editedNotes[index].text = text; 
    editedNotes[index].html = marked(text); 
    window.localStorage.setItem('notes', JSON.stringify([...editedNotes]));
  }

  return (
    <OuterContainer>
      {transition.map(({item, props, key}, i) => {
        return (
          item && (
            <NoteContainer key={item.id} style={props}>
              <NoteInput 
                // onInput={(event) => changeNote(i, event)} 
                ref={elementsRef.current[i]} 
                suppressContentEditableWarning={true} 
                dangerouslySetInnerHTML={{ __html: item.html }}
              />
              <DeleteBox onClick={() => removeNote(i)}>
                <DeleteX>
                  <ReactSVG src="/icons/trash.svg" />
                </DeleteX>
              </DeleteBox>
              <EditBox onClick={() => setNoteToEdit(item)}>
                <ReactSVG src="/icons/edit-pencil.svg" />
              </EditBox>
            </NoteContainer>
          )
          )
        })}
      <EditModal noteToEdit={noteToEdit} onNoteChange={(id, text) => changeNote(id, text)} closeModal={() => setNoteToEdit(null)} />
    </OuterContainer>
  );
}

export default NotesList;