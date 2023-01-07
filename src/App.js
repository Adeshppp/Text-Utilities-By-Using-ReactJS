import "./App.css";
import Navbar from "./My Components/Navbar";
import TextForm from "./My Components/TextForm";

import React, { useState } from 'react'
import About from "./My Components/About";
// import Alert from "./My Components/Alert";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState("dark");
  const [Alert, setAlert] = useState("null");
  console.log(mode)
  if(mode==="dark") document.body.style.backgroundColor="#042743";
  const toggleMode=()=>{
    if(mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode had been enabled!!!","success");


  }
    else if(mode==="dark") {
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode had been enabled!!!","success");
  }
  }

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  return (
    <>
          {/* <Navbar title="Text Utils" about="About Text-Utils"/> */}


      {/* <Alert alert={Alert}/> */}
      {/* <About/> */}
      {/* <TextForm heading="Enter the Text below " mode={mode}/> */}
      <BrowserRouter>
      <Navbar title="Text Utils" about="About Text-Utils" toggleMode={toggleMode}  mode={mode}/>

      <Routes>
            
          <Route path="/home" element={<TextForm heading="Enter the Text below "  mode={mode}/>}/>

          <Route path="/about" element={<About mode={mode}/>}/>

            
      </Routes>

      </BrowserRouter>






     </>
  );
}

export default App;
