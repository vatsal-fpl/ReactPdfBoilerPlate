import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
export default function Education(props) {
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
        Education
      </Text>
      {props.studentData.education.map((e) => {
        return (
          <View
            key={e.id}
            style={{ paddingBottom: "0.2cm", fontSize: "0.5cm" }}>
          
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ marginBottom: "5px" }}>
                {e.id} {e.degree}
              </Text>
              <Text>{e.finalScore}</Text>
            </View>
            
            <Text style={{ marginBottom: "5px" }}>
              Institute: {e.instituteName ? e.instituteName : null}
            </Text>
            <Text style={{ marginBottom: "5px" }}>
              University: {e.university}
            </Text>
          </View>
        );
      })}
    </>
  );
}