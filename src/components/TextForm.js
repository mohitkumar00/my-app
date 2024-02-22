import React, {useState} from 'react'

export default function TextForm(props) {
    const textAreaOnchangeHandler = (event)=>{
            setText(event.target.value)
    }
    const UpperCaseHandler = (event)=>{
        let newText = text.toUpperCase();
        setText(newText);
        
    }
    const LowerCaseHandler = (event)=>{
        let newText = text.toLowerCase();
        setText(newText);
        
    }
    const OnClearHandler = ()=>{
        setText("");
    }
    const[text, setText] = useState("");
    const[btnText, setBtnText] = useState("Enable Dark Mode");
    const [styleState, setStyeleStet] = useState({
        color:'black',
        backgroundColor:'white'
    })
    const OnViewModeHandler = ()=>{
        if(btnText === 'Enable Dark Mode')
        {
            setStyeleStet({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode");
        }
        else{
            setStyeleStet({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
  return (
    <>
      <div className="form-floating">
        <h1>{props.heading}</h1>
        <div className ="mb-3">
        <textarea rows="8"
          className="form-control my-3" style={styleState}
          placeholder={text}
          id="floatingTextarea"
          value={text}
          onChange={textAreaOnchangeHandler}
        ></textarea>
        <button type="button" className="btn btn-primary" onClick={UpperCaseHandler}>Convert to UpperCase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={LowerCaseHandler}>Convert to LowerCase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={OnClearHandler}>Clear</button>
        <button type="button" className="btn btn-primary mx-3" onClick={OnViewModeHandler}>{btnText}</button>
        </div>
      </div>
      <div className="Container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
      </div>
      <div className="Container  my-2">
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </>
  );
}
