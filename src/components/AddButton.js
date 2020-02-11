import React, { useContext } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { AppContext } from '../context/AppContext';

const Button = styled.div`
  ${tw`mt-5 border-none overflow-hidden relative inline-flex uppercase items-center justify-center shadow-2xl cursor-pointer`}
  transition: all .45s ease-Out;
  height: 40px;
  width: 150px;
  color: #BFC0C0;
  background: #c0a0a0;
`;

const Circle = styled.div`
  ${tw`w-0 h-0 opacity-0 absolute`}
  line-height: 40px;
  border-radius: 50%;
  background: #a0aec0;
  transition: all .45s ease-Out;
  top: 20px;
  left: 70px;

  ${Button}:hover & {
    width: 200%;
    height: 500%;
    opacity: 1;
    top: -70px;
    left: -70px;
  }
`;

const Text = styled.span`
  position: relative;
  transition: all .45s ease-Out;
  color: #fff;
`;

const AddButton = () => {
  const { addNote, currentNote } = useContext(AppContext);

  return (  
    <Button onClick={() => addNote(currentNote)}>
      <Circle />
      <Text>
        Add
      </Text>
    </Button>
  );
}
 
export default AddButton;