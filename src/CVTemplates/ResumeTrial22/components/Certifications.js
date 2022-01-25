import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Heading from "./Heading";
const style = StyleSheet.create({
  certificate: {
    fontFamily: "Arial",
    fontSize: "11px",
    fontWeight: "400",
  },
});
export default function Certifications({ studentData }) {
  return (
    <>
      <Heading heading="Certifications" />
      <View>
        {studentData.certification.map((certificate) => {
          return (
            <View key={certificate.id} style={style.certificate}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{certificate.title}</Text>
                <Text>{certificate.dateOfIssue}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
}
