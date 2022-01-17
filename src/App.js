import { PDFViewer } from '@react-pdf/renderer';
import B2column from './CVTemplates/2-column/B2column';
import {studentData} from './studentData';
function App() {
  return (
    
    <PDFViewer style={{minHeight:"100vh", minWidth:"100vw"}}>
      <B2column studentData={studentData} />
    </PDFViewer>
    
   
  );
}


export default App;