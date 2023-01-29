import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';


function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
 {/* <Navbar title ="textmagic" abouttext="About"/> */}
 <Navbar title="textmagic" mode={mode} toggleMode={toggleMode}/>
 <div className="container my-3" >
 <Textform heading ="Enter your Text to Analyze"/>
 
 </div>
    </>
  );
}

export default App;
