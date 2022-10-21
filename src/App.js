import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {

  const [mode, setMode] = useState('light')
  const [text, setText] = useState('Dark')
  
  const onToggle = ()=>{
    if(mode=== 'light'){
      setMode('dark')
      setText('Light')
      document.body.style.backgroundColor = "#202b36"
    }else{
      setMode('light')
      setText('Dark')
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      <Navbar theme = {mode} Mode = {text} toggleMode={onToggle} />
      <div className="container my-3">
        <TextForm heading = "Enter your text here" theme = {mode}/>
      </div>
    </>
  );
}

export default App;
