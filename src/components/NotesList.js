import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const NotesList = () => {
  const { notes } = useContext(AppContext);

  return (  
    <div>
      {notes.map((note) => {
        return (
          <>
          <p>
            {note.title}
          </p>
          <p>
            {note.description}
          </p>
          </>
        )
      })}
    </div>
  );
}
 
export default NotesList;