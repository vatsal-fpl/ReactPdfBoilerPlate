import './App.css';
import React from 'react';
import PDFfile from './components/PDFfile';
import { PDFDownloadLink } from '@react-pdf/renderer';

function App (){
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFfile />} fileName='exmp'>
        {({loading}) =>  
          loading ? (
            <button>Loading Doc..</button> 
          ) : ( 
            <button>Download</button>
          )
          }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
