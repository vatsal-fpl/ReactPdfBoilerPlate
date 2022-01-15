import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

export const Styles = StyleSheet.create({
  header: {
    marginBottom: "3px",
    padding: "5px",
    backgroundColor: "#BDC3C7",
  },
  section: {
    borderBottom: "1px solid #000",
    backgroundColor: "#BDC3C7",
    color: "#2C3E50",
    textTransform: "uppercase",
    fontSize: ".5cm",
  },
});

export default function Profile(props) {
  const { studentData } = props;
  return (
    <>
      <View style={Styles.header}>
        <Text style={{ fontSize: ".6cm", marginBottom: "3px" }}>
          {studentData.student.firstName} {studentData.student.lastName}
        </Text>
        <View style={{ fontSize: ".45cm", flexDirection: "row" }}>
          <Text style={{ marginRight: "5px" }}>
            {studentData.student.contactNumber}
          </Text>
          <Text style={{ marginRight: "5px" }}>
            {studentData.student.email}
          </Text>
        </View>
      </View>
    </>
  );
}
