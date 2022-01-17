import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

export const Styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#f0f8ff",
    padding: "5px",
  },
  PersonalDetail: {
    marginBottom: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5px",
    backgroundColor: "#b98c7b",
    //borderRadius: ".5cm",
    borderTop:"2px",
    borderLeftWidth: "5px",
  },
  section: {
    backgroundColor: "#D3D3D3",
    borderBottom: "1px solid #000",
    padding: "5px",
    margin: "5px",
    textTransform: "uppercase",
    fontSize: ".6cm",
  },
  
    items: {
      paddingBottom: "0.2cm",
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