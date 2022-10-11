import React, {useState} from 'react'

export default function TextForm(props) {
  const [text , setText] = useState('Enter your text here');

  const clickUpHandler = ()=> {
      console.log("Button Clicked")
      var newText = text.toUpperCase()
      setText(newText)
  } 

  const handleOnChange = (event)=>{
    console.log("onchanged triggred")
    setText(event.target.value)
  }


  return (
    <div>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <label htmlFor="txt" className="form-label">TextArea</label>
        <textarea className="form-control"  value = {text} id="txt" onChange={handleOnChange} rows="8"></textarea>   
         {/* we cannot edit the text body as the value is always set to text i.e. "enter ypur text here" ,
             to change the text we have to listen onchange that on a event in the function handleOnChange 
             and pass that event to setText(event.yarget.value) function*/} 
        </div>
        <button className="btn btn-primary" onClick={clickUpHandler}>UPPERCASE</button>
    </div>
  );
}
