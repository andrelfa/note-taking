import React from 'react';
import Note from './components/Note/Note'
import AddButton from './components/AddButton'
import NotesList from './components/NotesList'
import styled from 'styled-components';
import tw from 'tailwind.macro';

const AppContainer = styled.div`
  ${tw`flex items-center justify-center flex-col`}
`;


const App = () => {

  return (
    <AppContainer>
      <Note />
      <AddButton />
      <NotesList />
    </AppContainer>
  );
}

export default App;
