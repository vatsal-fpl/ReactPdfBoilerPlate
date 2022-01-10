import { PDFViewer } from '@react-pdf/renderer';
import Basic from './components/Basic';
import {studentData} from './studentData';
function App() {
  return (
    
    <PDFViewer style={{minHeight:"100vh",minWidth:"100vw"}}>
      <Basic studentData={studentData} />
    </PDFViewer>
    
   
  );
}

export default App;
