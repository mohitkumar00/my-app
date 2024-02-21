import React, {useState} from 'react'

export default function TextForm(props) {
    const textAreaOnchangeHandler = (event)=>{
            setText(event.target.value)
    }
    const UpperCaseHandler = (event)=>{
        console.log(text)
        let newText = text.toUpperCase();
        setText(newText)
        
    }
    const[text, setText] = useState("")
  return (
      <div className="form-floating">
        <h1>{props.heading}</h1>
        <div className ="mb-3">
        <textarea rows="8"
          className="form-control my-3"
          placeholder={text}
          id="floatingTextarea"
          value={text}
          onChange={textAreaOnchangeHandler}
        ></textarea>
        <button type="button" className="btn btn-primary" onClick={UpperCaseHandler}>Convert to UpperCase</button>
        </div>
      </div>
  );
}
