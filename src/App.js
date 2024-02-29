import { useSpeechSynthesis } from 'react-speech-kit';
import './App.css';
import { useState } from 'react';

function App() {
  const [val, setVal]=useState('');
  const {speak}=useSpeechSynthesis();
  return (
    <>
    <div className="container my-4"style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'yellow'}}>
    <h2 className='my-3'>Text To Speech Converter</h2><br/>
    <textarea id="text" value={val} onChange={(e)=>setVal(e.target.value)} cols="100" rows="10"></textarea>
    <div style={{display:'flex',flexDirection:'row'}}>
     <button className='btn btn-primary my-3'onClick={()=>speak({text:val})}>Convert to Speech</button>
     <button className="btn btn-primary my-3 mx-3" onClick={(e)=>setVal(e.target.value="")}>Clear Text</button>
    </div>
    
    </div>
    
    </>
  );
}

export default App;
