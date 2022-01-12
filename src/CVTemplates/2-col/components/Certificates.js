import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { Styles } from "./Header";
export default function Certificates(props) {
  return (
    <>
      <View style={{ fontSize: ".5cm", margin: "0" }}>
        <Text style={Styles.section}>Certificates</Text>
        {props.studentData.certification.map((c) => {
          return (
            <View key={c.id} style={{ fontSize: ".45cm" }}>
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
