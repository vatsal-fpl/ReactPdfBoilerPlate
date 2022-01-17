import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

export const Styles = StyleSheet.create({
  Certificate: {
          padding: "5px",
          borderTop: "1.5px",
          textAlign: "center",
          textTransform: "uppercase",
          margin: "5px",
          backgroundColor: "#e2d4cf",
          fontSize: ".6cm",
          //borderRadius:".5cm",
          borderLeftWidth: "5px",
  },
});
export default function Certification(props) {
  return (
    <>
      <View style={{ fontSize: ".5cm", margin: "0" }}>
        <Text style={Styles.Certificate}> Certificates </Text>
        {props.studentData.certification.map((certificates) => {
          return (
            <View key={certificates.id} style={{ fontSize: ".5cm" }}>
              <Text style={{ marginBottom: ".2cm" }}>
                {certificates.id} {certificates.title}
              </Text>
              <Text style={{ marginBottom: ".2cm" }}>{certificates.issuer}</Text>
              <Text style={{ marginBottom: ".2cm" }}>
                Issue Date:{certificates.dateOfIssue}
              </Text>
            </View>
          );
        })}
      </View>
    </>
  );
}