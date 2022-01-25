import { PDFViewer, Font } from "@react-pdf/renderer";
import { React } from "react";
import { useState } from "react";
import TemplatePreview from "./CVTemplates/CVTempletPDFViewer";

import { studentData } from "./studentData";
import { templateSequence } from "./CVTemplates/CVTemplateData";

function App() {
  const [templateToShow, setTemplateToShow] = useState(0);

  const renderPDFPreview = () => {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "15%" }}>
          <p style={{ textAlign: "center" }}>Choose Template</p>
          <ol>
            {templateSequence.map((template) => (
              <li style={{ padding: "5px 0" }} key={template.id}>
                <button
                  key={template.id}
                  onClick={() => setTemplateToShow(template.id)}
                >
                  {template.name}
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div style={{ width: "85%" }}>
          <PDFViewer style={{ height: "85vh", width: "85vw" }}>
            <TemplatePreview
              studentData={studentData}
              templateId={templateToShow}
            />
          </PDFViewer>
        </div>
      </div>
    );
  };

  return <>{renderPDFPreview()}</>;
}

export default App;
