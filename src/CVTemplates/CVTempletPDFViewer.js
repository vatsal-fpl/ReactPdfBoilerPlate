import React from "react";

import Basic from "./Basic/Basic";
import Basic2col from "./2-col/Basic2col";
import ResumeTrial22 from "./ResumeTrial22/ResumeTrial22";

export default function TemplatePreview(props) {
  switch (props.templateId) {
    case 0:
      return <Basic studentData={props.studentData} />;
    case 1:
      return <Basic2col studentData={props.studentData} />;
    case 2:
      return <ResumeTrial22 studentData={props.studentData} />;
    default:
      return <Basic studentData={props.studentData} />;
  }
}
