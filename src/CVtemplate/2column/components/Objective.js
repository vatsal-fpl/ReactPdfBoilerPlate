import { Text, StyleSheet } from "@react-pdf/renderer";
import React from 'react';
import ReactDOM from 'react-dom';

export const Styles = StyleSheet.create({
  color: "blue",
  padding: "5px",
  paddingBottom: "5px",
  backgroundColor: "lightpink",
  textAlign: "center",
  textTransform: "uppercase",
  borderTop: "1px",
  borderBottom: "1px",
  marginBottom: "5px",
  marginTop: "5px",
  fontSize: ".4cm"
});


export default function Objective(props) {
  return (
    <>
      <Text style={Styles}>
        Objective
      </Text>
      <Text style={{ fontSize: ".5cm" }}>
        {props.studentData.student.objective}
      </Text>
    </>
  );
}