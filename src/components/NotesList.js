import React, { useContext, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useTransition, animated } from 'react-spring';

const OuterContainer = styled.div`
  width: 636px;
`

const NoteContainer = styled(animated.div)`
  ${tw`my-8 py-1 px-3 italic shadow-lg relative`}
  background: #a0aec0;
  color: #fff;
  padding-right: 43px;
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
  background: #f56e6e;
  width: 30px;
`

const DeleteX = styled.span`
  font-size: 12px;
`

const NotesList = () => {
  
  const { notes, setNotes, removeNote } = useContext(AppContext);

  const ref = useRef();
  const transition = useTransition(notes, s => s, {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(10px)' }
  });  

  const deleteNote = index => {
    setNotes(notes.filter((_, i) => i !== index));
  }

  return (  
    <OuterContainer>
      {transition.map(({item, props, key}, i) => {
        return (
          item && (
            <NoteContainer key={key} style={props}>
              <p>
                "{item}"
              </p>
              <DeleteBox onClick={() => removeNote(i)}>
                <DeleteX>
                  X
                </DeleteX>
              </DeleteBox>
            </NoteContainer>
          )
        )
      })}
    </OuterContainer>
  );
}
 
export default NotesList;