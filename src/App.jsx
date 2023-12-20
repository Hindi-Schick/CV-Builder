import { useState } from 'react'
import './App.css'
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'
import { AppProvider } from './context/AppContext';


function App() {

  return (
    <>
      <AppProvider>
      <div className="App">
        <header className="App-header">
          <h1>Resume Builder</h1>
          <div className="App-content">
            <div className="App-form">
              <ResumeForm />
            </div>
            <div className="App-preview">
              <ResumePreview />
            </div>
          </div>
        </header>
      </div>
    </AppProvider>
    </>
  );
}

export default App
