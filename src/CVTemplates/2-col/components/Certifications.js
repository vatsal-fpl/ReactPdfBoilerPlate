import React from "react";
import { View, Text } from "@react-pdf/renderer";
import Heading from "./Heading";
export default function Certifications(props) {
  const { studentData } = props;
  return (
    <>
      <View>
        <Heading title="Certifications" />
        {studentData.certification.map((certification) => {
          return (
            <View key={certification.id} style={{ fontSize: ".45cm" }}>
              <Text style={{ marginBottom: ".2cm" }}>
                {certification.id} {certification.title}
              </Text>
              <Text style={{ marginBottom: ".2cm" }}>
                {certification.issuer}
              </Text>
              <Text style={{ marginBottom: ".2cm" }}>
                Issue Date:{certification.dateOfIssue}
              </Text>
            </View>
          );
        })}
      </View>
    </>
  );
}
