import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import PDFFile from './components/PDFFile';
import { PDFDownloadLink } from '@react-pdf/renderer';
import './App.css';

function App() {
  return (
    <div className="App">

      <PDFDownloadLink document={<PDFFile />} fileName='exmp'>
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
