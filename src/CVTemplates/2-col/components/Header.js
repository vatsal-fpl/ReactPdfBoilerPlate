import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

export const Styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: "3px",
  },
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
  skill: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
    fontSize: "13px",
    maxWidth: "900px",
    col: {
      marginRight: "12px",
      backgroundColor: "#fab1a0",
      padding: "20px",
      flexBasis: "35%",
    },
    items: {
      paddingBottom: "0.2cm",
    },
  },
});

export default function header(props) {
  return (
    <>
      <View style={Styles.header}>
        <Text style={{ fontSize: ".6cm", marginBottom: "3px" }}>
          {props.studentData.student.firstName}{" "}
          {props.studentData.student.lastName}
        </Text>
        <View style={{ fontSize: ".45cm", flexDirection: "row" }}>
          <Text style={{ marginRight: "5px" }}>
            {props.studentData.student.contactNumber}
          </Text>
          <Text style={{ marginRight: "5px" }}>
            {props.studentData.student.email}
          </Text>
        </View>
      </View>
    </>
  );
}
