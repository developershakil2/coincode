import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import CreateToken from './components/pages/CreateToken';
import Nav from './components/Nav';
function App() {
  const [coller, setSec] = useState("light");
  return (
    <>
     <div className={coller}>
      <Nav coller={coller} setSec={setSec} />
     
    </div>
    
  
    </>
   
  );
}

export default App;
