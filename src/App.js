import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Dark');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        type : type             //type : is different from : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }

  //blue theme

  const onBlue =()=>{
      setMode('primary')
      document.body.style.backgroundColor = "#66a3ff"
      showAlert("Blue theme selected","success")
  }

  //green theme

  const onGreen =()=>{
    setMode('success')
    document.body.style.backgroundColor = "#4dffa6"
    showAlert("Green theme selected","success")
}

//danger theme

const onRed =()=>{
  setMode('danger')
  document.body.style.backgroundColor = "#ff6666"
  showAlert("Red theme selected","success")
}

//info theme

const onYellow =()=>{
  setMode('warning')
  document.body.style.backgroundColor = "#ffff80"
  showAlert("Yellow theme selected","success")
}

const onToggle = ()=>{
  if(mode=== 'light' || mode === '#0066ff'){
    setMode('dark')
    setText('Light')
    document.body.style.backgroundColor = "#202b36"                 // change the color of the whole body 
    showAlert("Dark Mode enabled successfullly", "success")
  }else{
    setMode('light')
    setText('Dark')
    document.body.style.backgroundColor = "white"
    showAlert("Light Mode enabled successfullly", "success")
  }
}
  return (
    <>
      <Router>
      <Navbar title = 'TextUtils' theme = {mode} Mode = {text} toggleMode={onToggle} toggleBlue={onBlue} toggleGreen = {onGreen} toggleRed = {onRed} toggleYellow = {onYellow}/>
      <Alert alert = {alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path='/' element = {<TextForm showAlert={showAlert} heading = "Enter your text here" theme = {mode}/>}/>
              {/* passing showAtert function as props */}
          <Route exact path='/about' element = {<About theme = {mode}/>}/>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App; 
