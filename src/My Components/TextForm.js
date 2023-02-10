import React ,{useState} from "react";
export default function TextForm(props) {
  const upperCase=()=>{
    settext1(text.toUpperCase());
  }
  const lowerCase=()=>{
    settext1(text.toLowerCase());
  }
  const clean=()=>{
    settext("");
    settext1("");
  }
  const handleOnChange=(event)=>{
    console.log(event.target.value.charAt(text.length));
    settext(event.target.value);
  }
  const CopyText=()=>{
    let text=document.getElementById("mybox1");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const SpaceRemove=()=>{
    settext1(text.split(/[ ]+/).join(" "));//regex
  }
  const [text, settext] = useState('');
  const[text1,settext1] = useState("");
  return (
    <>
    <div className="container my-3">
    <div className="mb-3"  style={{color: props.mode==="dark"?"white":"black"}}>

        <h1>{props.heading}</h1>
        <label htmlFor="mybox" className="form-label">
        </label>
        <div className="input-group">
          <textarea className="form-control mx-1" placeholder="Enter Text Here..." onChange={handleOnChange} value={text} id="mybox"  rows="10" style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"black", borderColor:props.mode==="dark"?"white":"black"}} />
          <textarea className="form-control mx-1"  placeholder="Converted Text Here..." onChange={handleOnChange} value={text1} id="mybox1"  rows="10" style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"black", borderColor:props.mode==="dark"?"white":"black"}}/>
        </div>

      </div>


      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" disabled={text.length<1} onClick={upperCase} className={`btn btn-outline-${props.mode==="dark"?"light":"dark"} mx-1`}>Convert to UPPER case</button>
        <button type="button" disabled={text.length<1} onClick={lowerCase} className={`btn btn-outline-${props.mode==="dark"?"light":"dark"} mx-1`}>Convert to lower case</button>
        <button type="button" disabled={text.length<1} onClick={clean} className={`btn btn-outline-${props.mode==="dark"?"light":"dark"} mx-1`}>Clear</button>
        <button type="button" disabled={text1.length<1} onClick={CopyText} className={`btn btn-outline-${props.mode==="dark"?"light":"dark"} mx-1`}>Copy Text</button>
        <button type="button" disabled={text.length<1} onClick={SpaceRemove} className={`btn btn-outline-${props.mode==="dark"?"light":"dark"} mx-1`}>Remove extra spaces</button>
    </div>
    <div className="container my-3"   style={{color: props.mode==="dark"?"white":"black"}}>
      <h2 >Your text Summary</h2>
      <p>{text.length} characters and {text.split(/\s+/).length-1} words</p>
      <p>You will need {0.008*(text.split(/\s+/).length-1)} minutes to read.</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Your Text above to preview."}</p>
    </div>
    </div>

    </>
  );
}
