import { useSpeechSynthesis } from 'react-speech-kit';
import './App.css';
import { useState } from 'react';

function App() {
  const [val, setVal]=useState('');
  const {speak}=useSpeechSynthesis();
  return (
    <>
    <div className="container"style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'yellow'}}>
    <h2 >Text To Speech Converter</h2><br/>
    <textarea id="text" value={val} onChange={(e)=>setVal(e.target.value)} cols="100" rows="10"></textarea>
    <button className='btn btn-primary my-3'onClick={()=>speak({text:val})}>Convert to Speech</button>
    </div>
    
    </>
  );
}

export default App;
