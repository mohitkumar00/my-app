import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtilityTool" myAboutText="About TextUtilsApp"/>
    <div className='textAreaContainer my-3' >
    <TextForm heading="Enter your Text to Analyze" text="Text"/>
    </div>
    
    </>
  );
}

export default App;
