import React from "react";
import { View, Text } from "@react-pdf/renderer";


export default function Education(props) {
  return (
    <>
      <Text
        style={{
          
          padding: "5px",
          borderBottom: "1px",
          textTransform: "uppercase",
          marginBottom: "5px",
          backgroundColor: "#D3D3D3",
          fontSize: ".6cm",
        }}
      >
        Education
      </Text>
      {props.studentData.education.map((e) => {
        return (
          <View
            key={e.id}
            style={{ paddingBottom: "0.2cm", fontSize: "0.5cm" }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
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