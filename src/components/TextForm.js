import React, {useState} from 'react'

export default function TextForm(props) {
  const [text , setText] = useState('Enter your text here');
  const [dark , myDark] = useState(
    {
      color : "white",
      backgroundColor : "#405368"
    }
  )
  const [btn , setBtn] = useState("Enable Light Mode")

  // useState is a hook,  Hooks let us use state and other React features without writing a class (uses function😅)

  const clickModeHandler = ()=>{
    if(dark.color === "white"){
      myDark({
        color : "#405368",
        backgroundColor : "white"
      })
      setBtn("Enable Dark Mode")

    }else{
      myDark({
        color : "white",
        backgroundColor : "#405368"
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

const clickCopyHandler = ()=>{
    var text = document.getElementById("txt")
    // text.select()                                //selects the text
    navigator.clipboard.writeText(text.value)
}


  const handleOnChange = (event)=>{
    console.log("onchanged triggred")
    setText(event.target.value)
  }


  return (
    <>
    <div style={{color : props.theme==='light'?'black':'white'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <label htmlFor="txt" className="form-label">TextArea</label>
        <textarea className="form-control" style={{backgroundColor :props.theme==='light'?'white':'#405368',color:props.theme==='light'?'black':'white'}} value = {text} id="txt" onChange={handleOnChange} rows="8"></textarea>   
         {/* we cannot edit the text body as the value is always set to text i.e. "enter ypur text here" ,
             to change the text we have to listen onchange that on a event in the function handleOnChange 
             and pass that event to setText(event.yarget.value) function*/} 
        </div>
        <button className="btn btn-primary" style={dark} onClick={clickUpHandler}>Uppercase</button>
        <button className="btn btn-outline-primary mx-2" style={dark} onClick={clickLoHandler}>Lowercase</button>
        <button className="btn btn-outline-primary" style={dark} onClick={clickModeHandler}>{btn}</button>
        <button className="btn btn-outline-primary mx-2" style={dark} onClick={clickCopyHandler}>Copy</button>

    </div>
    <div className="container my-3" style={{color : props.theme==='dark'?'white':'black'}}>
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
