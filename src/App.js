import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[mode, setMode] = useState('light')

  const toggleMode = ()=>{
    console.log(mode)
    if(mode === 'light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
    <Navbar title="TextUtilityTool" myAboutText="About TextUtilsApp" mode={mode} toggleMode={toggleMode}/>
    <div className='textAreaContainer my-3' >
    <TextForm heading="Enter your Text to Analyze" text="Text"/>
    </div>
    
    </>
  );
}

export default App;
