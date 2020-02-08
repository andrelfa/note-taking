import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const [notes, setNotes] = useState([{
    title: 'Nota Simples',
    description: 'descrição da nota'
  }]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const defaultContext = {
    notes,
    addNote
  };

  return (
    <AppContext.Provider value={defaultContext}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };