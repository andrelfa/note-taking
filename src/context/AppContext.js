import React, { createContext, useState } from 'react';
import { getObjectFromLocalStorage } from '../utils/utils';
import marked from 'marked';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const validNotes = getObjectFromLocalStorage('notes').filter(c => !!c);
  const [notes, setNotes] = useState(validNotes);
  window.localStorage.setItem('notes', JSON.stringify(validNotes));
  const [currentNote, setCurrentNote] = useState();

  const addNote = note => {
    if (!note) return;
    const noteObj = {
      text: note,
      html: marked(note),
      focused: false
    };
    setNotes([...notes, noteObj])
    window.localStorage.setItem('notes', JSON.stringify([...notes, noteObj]));
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