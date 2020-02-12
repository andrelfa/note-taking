import React, { createContext, useState } from 'react';
import { getObjectFromLocalStorage } from '../utils/utils';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const validNotes = getObjectFromLocalStorage('notes').filter(c => !!c);
  const [notes, setNotes] = useState(validNotes);
  window.localStorage.setItem('notes', JSON.stringify(validNotes));
  const [currentNote, setCurrentNote] = useState();

  const addNote = note => {
    if (notes.includes(note)) return;
    setNotes([...notes, note])
    window.localStorage.setItem('notes', JSON.stringify([...notes, note]));
  };

  const removeNote = index => {
    if (notes.includes(index)) return;
    setNotes(notes.filter((_, i) => i !== index));
    window.localStorage.setItem('notes', JSON.stringify([...notes.filter((_, i) => i !== index)]));
  };  

  const defaultContext = {
    notes,
    addNote,
    currentNote,
    setCurrentNote,
    setNotes,
    removeNote
  };

  return (
    <AppContext.Provider value={defaultContext}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };