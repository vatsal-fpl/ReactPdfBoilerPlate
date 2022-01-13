import './App.css';
import React from 'react';
import Basic from './CVtemplate/Basic/Basic';
import { studentData } from './studentData';
import { PDFViewer } from '@react-pdf/renderer';
    
function App() {
return (
    
    <PDFViewer style={{minHeight:"100vh",minWidth:"100vw"}}>
      <Basic studentData={studentData} />
    </PDFViewer>
    
  );
}

export default App;