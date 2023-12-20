// AppContext.jsx
import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  resumes: [],
  user: null,
  education: '',
  workExperience: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RESUME':
      return { ...state, resumes: [...state.resumes, action.payload] };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_EDUCATION':
      return { ...state, education: action.payload };
    case 'SET_WORK_EXPERIENCE':
      return { ...state, workExperience: action.payload };
    // נוסיף פעולות נוספות כפי שהן נחוצות
    default:
      return state;
  }
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext, AppContext };