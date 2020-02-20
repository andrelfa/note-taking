import React, { createContext, useState } from 'react';
import { getObjectFromLocalStorage } from '../utils/utils';
import marked from 'marked';
import uuidv4 from 'uuid/v4';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const [notes, setNotes] = useState(getObjectFromLocalStorage('notes'));
  const [currentNote, setCurrentNote] = useState();

  const addNote = note => {
    if (notes.includes(note) || !note) return;
    const noteObj = {
      text: note,
      html: marked(note),
      id: uuidv4()
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