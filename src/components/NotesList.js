import React, { useContext, useRef, createRef, useState } from 'react';
import { AppContext } from '../context/AppContext';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useTransition, animated } from 'react-spring';
import marked from 'marked';

const OuterContainer = styled.div`
  ${tw`flex items-center justify-between w-3/5 flex-wrap`}
`

const NoteContainer = styled(animated.div)`
  ${tw`my-2 shadow-lg relative`}
  background: #a0aec0;
  color: #fff;
  padding-right: 55px;
  width: 44%;
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

// const EditBox = styled.div`
//   ${tw`justify-center cursor-pointer`}
//   position: absolute;
//   display: flex;
//   align-items: center;
//   height: 100%;
//   font-style: normal;
//   top: 0;
//   right: 30px;
//   background: #dfe081;
//   width: 30px;
// `

// const EditText = styled.span`
//   font-size: 12px;
// `

const NoteInput = styled.div`
  ${tw`p-3 h-full focus:outline-none w-full inline-block`}
  background: 0;
  border: 0;
  color: #fff;
  font-size: 16px;

  &:focus {
    background: #6482a9;
  }

  &> * {
    margin: 0;
  }
`

const NotesList = () => {

  const { notes, removeNote } = useContext(AppContext);
  const [focused, setFocused] = useState();
  const elementsRef = useRef(notes.map(() => createRef()));

  const transition = useTransition(notes, s => s.html, {
    from: { opacity: 0, transform: "translateX(-10px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(10px)" }
  });

  const changeNote = (index, event) => {
    let editedNotes = [...notes];
    editedNotes[index].text = event.target.textContent;
    editedNotes[index].html = marked(event.target.textContent);
    window.localStorage.setItem('notes', JSON.stringify([...editedNotes]));
  }
  
  return (
    <OuterContainer>
      {transition.map(({item, props, key}, i) => {
        console.log('item', item)

        return (
          item && (
            <NoteContainer key={i} style={props}>
              <NoteInput onFocus={() => {setFocused(true); item.focused = true}} 
                onBlur={() => {setFocused(false); item.focused = false}} 
                onInput={(event) => changeNote(i, event)} 
                ref={elementsRef.current[i]} 
                suppressContentEditableWarning={true} 
                contentEditable={true} 
                dangerouslySetInnerHTML={{ __html: item.focused ? item.text : item.html }} 
              />
                {/* {item.focused ? item.text : item.html}
                {item.focused ? 'verdadeiro' : 'falso'}
              </NoteInput> */}
              <DeleteBox onClick={() => removeNote(i)}>
                <DeleteX>
                  X
                </DeleteX>
              </DeleteBox>
              {/* <EditBox onClick={() => elementsRef.current[i].current.focus()}>
                <EditText>
                  Edit
                </EditText>
              </EditBox> */}
            </NoteContainer>
          )
        )
      })}
    </OuterContainer>
  );
}

export default NotesList;