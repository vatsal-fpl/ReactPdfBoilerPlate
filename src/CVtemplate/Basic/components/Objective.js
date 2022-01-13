import { Text } from "@react-pdf/renderer";
import React from 'react';
import ReactDOM from 'react-dom';

export default function Objective(props) {
  return (
    <>
      <Text
        style={{
          color: "blue",
          padding: "5px",
          paddingBottom: '5px',
          textAlign: 'center',
          borderTop: '2px',
          borderBottom: '2px',
          textTransform: "uppercase",
          marginBottom: "5px",
          marginTop: "5px",
          // backgroundColor: "lightpink",
          fontSize: ".6cm",
          fontStyle: 'bold'
        }}
      >
        Objective
      </Text>
      <Text style={{ fontSize: ".5cm" }}>
        {props.studentData.student.objective}
      </Text>
    </>
  );
}