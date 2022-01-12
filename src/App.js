import { PDFViewer, Font } from "@react-pdf/renderer";
import Basic2col from "./CVTemplates/2-col/Basic2col";
import { studentData } from "./studentData";
//Font.register({ family: 'Be Vietnam Pro', src:'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&display=swap'});

function App() {
  return (
    <PDFViewer style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Basic2col studentData={studentData} />
    </PDFViewer>
  );
}

export default App;
