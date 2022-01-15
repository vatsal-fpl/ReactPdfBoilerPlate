import React from "react";
import { View, Text } from "@react-pdf/renderer";

export default function Certifications(props) {
  return (
    <>
      <View style={{ fontSize: ".5cm", margin: "0" }}>
        <Text
          style={{
            color: "#0984e3",
            padding: "5px",
            borderBottom: "1px",
            textTransform: "uppercase",
            marginBottom: "5px",
            backgroundColor: "#fdcb6e",
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
              <Text style={{ marginBottom: ".2cm" }}>
                Issue Date:{c.dateOfIssue}
              </Text>
            </View>
          );
        })}
      </View>
    </>
  );
}
