import React from 'react';
import { studentData } from './studentData';
import { PDFViewer } from '@react-pdf/renderer';
import Basic from './CVtemplate/2column/Basic';
    
function App() {
return (
    
    <PDFViewer style={{minHeight:"100vh",minWidth:"100vw"}}>
      <Basic studentData={studentData} />
    </PDFViewer>
    
  );
}

export default App;