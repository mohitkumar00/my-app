import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const[mode, setMode] = useState('light')
  const[alert,setAlert] = useState(null)
    const showAlert = (message, type)=>{
        setAlert({
            message: message,
            type:type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
    }
  const toggleMode = ()=>{
    console.log(mode)
    if(mode === 'light'){
      setMode('dark')
      showAlert('Dark Mode has been enabled','info')
    }
    else{
      setMode('light')
      showAlert('Light Mode has been enabled','info')
    }
  }
  return (
    <>
    <Alert alert={alert} />
    <Navbar title="TextUtilityTool" myAboutText="About TextUtilsApp" mode={mode} toggleMode={toggleMode}/>
    <div className='textAreaContainer my-3' >
    <TextForm heading="Enter your Text to Analyze" text="Text" showAlert={showAlert}/>
    </div>
    
    </>
  );
}

export default App;
