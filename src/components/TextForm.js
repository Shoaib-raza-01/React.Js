import React, {useState} from 'react'

export default function TextForm(props) {
  const [text , setText] = useState('Enter your text here');
  const [dark , myDark] = useState(
    {
      color : "white",
      backgroundColor : "black"
    }
  )
  const [btn , setBtn] = useState("Enable Dark Mode")

  // useState is a hook,  Hooks let us use state and other React features without writing a class (uses function😅)

  const clickModeHandler = ()=>{
    if(dark.color === "white"){
      myDark({
        color : "black",
        backgroundColor : "white"
      })
      setBtn("Enable Dark Mode")
    }else{
      myDark({
        color : "white",
        backgroundColor : "black"
      })
      setBtn("Enable Light Mode")
    }
  }
  const clickUpHandler = ()=> {
      console.log("Button Clicked")
      var newText = text.toUpperCase()
      setText(newText)
  } 

  const clickLoHandler = ()=> {
    console.log("Button Clicked")
    var newText = text.toLowerCase()
    setText(newText)
}

  const handleOnChange = (event)=>{
    console.log("onchanged triggred")
    setText(event.target.value)
  }


  return (
    <>
    <div>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <label htmlFor="txt" className="form-label">TextArea</label>
        <textarea className="form-control" style={dark} value = {text} id="txt" onChange={handleOnChange} rows="8"></textarea>   
         {/* we cannot edit the text body as the value is always set to text i.e. "enter ypur text here" ,
             to change the text we have to listen onchange that on a event in the function handleOnChange 
             and pass that event to setText(event.yarget.value) function*/} 
        </div>
        <button className="btn btn-primary" style={dark} onClick={clickUpHandler}>Uppercase</button>
        <button className="btn btn-outline-primary mx-2" style={dark} onClick={clickLoHandler}>Lowercase</button>
        <button className="btn btn-outline-primary mx-2" style={dark} onClick={clickModeHandler}>{btn}</button>

    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>
        {text.split(" ").length} words and {text.length} characters 
      </p>
      <p>
        {0.008 * text.split(" ").length} Minutes read
      </p>
    </div>
    </>
  );
}
