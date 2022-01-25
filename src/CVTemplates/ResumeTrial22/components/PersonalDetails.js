import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({
  flexstyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    color: "#00AF50",
    fontSize: "35px",
    fontWeight: "400",
    marginBottom: "20px",
  },
});

export default function PersonalDetails({ studentData }) {
  return (
    <>
      <View style={style.flexstyle}>
        <Text style={style.heading}>
          {studentData.student.firstName + " "}
          {studentData.student.lastName}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "12px",
            fontWeight: "400",
            color: "#00000080",
            fontStyle: "normal",
          }}
        >
          <Text style={{ marginRight: "15px" }}>
            {studentData.student.contactNumber}
          </Text>
          <Text style={{ marginRight: "15px" }}>
            {studentData.student.email}
          </Text>
          <Text style={{ marginRight: "15px" }}>
            {studentData.student.city}
          </Text>
        </View>
      </View>
    </>
  );
}
