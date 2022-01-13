import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

export default function Certifications(props) {
  return (
    <>
      <View style={{ fontSize: ".5cm", margin: "0" }}>
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
          Certificates
        </Text>
        {props.studentData.certification.map((c) => {
          return (
            <View key={c.id} style={{ fontSize: ".5cm" }}>
              <Text style={{ marginBottom: ".2cm" }}>
                {c.id} {c.title}
              </Text>
              <Text style={{ marginBottom: ".2cm" }}>{c.issuer}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
}