import React from "react";

import Basic from "./Basic/Basic";
import Basic2col from "./2-col/Basic2col";
export default function TemplatePreview(props) {
  switch (props.templateId) {
    case 0:
      return <Basic studentData={props.studentData} />;
      case 1:
        return <Basic2col studentData={props.studentData} />;
    default:
      return <Basic studentData={props.studentData} />;
  }
}
