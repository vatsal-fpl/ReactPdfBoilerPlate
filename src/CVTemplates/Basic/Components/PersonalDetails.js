import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

export const Styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: "5px",
  },
  PersonalDetail: {
    marginBottom: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5px",
    backgroundColor: "#808080",
  },
  section: {
    backgroundColor: "#D3D3D3",
    borderBottom: "1px solid #000",
    padding: "5px",
    margin: "5px",
    textTransform: "uppercase",
    fontSize: ".6cm",
  },
  skill: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
    fontSize: "13px",
    maxWidth: "900px",
    col: {
      marginRight: "12px",
      backgroundColor: "#D3D3D3",
      padding: "20px",
      flexBasis: "35%",
    },
    items: {
      paddingBottom: "0.2cm",
    },
  },
});

export default function PersonalDetail(props) {
    return (
      <>
        <View style={Styles.PersonalDetail}>
          <Text style={{ fontSize: "25px", alignSelf: "center" }}>
            {props.studentData.student.firstName}{" "}
            {props.studentData.student.lastName}
          </Text>
          <View style={{ fontSize: "11px", marginBottom: "5px" }}>
            <Text>{props.studentData.student.contactNumber}</Text>
            <Text>{props.studentData.student.email}</Text>
          </View>
        </View>
      </>
    );
  }