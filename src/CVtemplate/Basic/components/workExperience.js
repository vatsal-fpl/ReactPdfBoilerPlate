import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

export default function workExperience(pro) {
  return (
    <>
      <Text
        style={{
          color: "blue",
          padding: "5px",
          paddingBottom: '5px',
          textAlign: 'center',
          borderTop: '2px',
          borderBottom: '2px',
          textTransform: "uppercase",
          marginBottom: "5px",
          marginTop: "5px",
          // backgroundColor: "lightpink",
          fontSize: ".6cm",
          fontStyle: 'bold'
        }}
      >
        Work Experience
      </Text>
      <View style={{ fontSize: "11px", marginBottom: "5px" }} wrap={false}>
        {pro.studentData.workExperience.map((item) => {
          return (
            <View style={{ fontSize: ".5cm", margin: "5px" }}>
              <Text style={{ marginBottom: "5px" }}>
                {item.companyName}
              </Text>
              <Text style={{ marginBottom: "5px" }}>{item.position}</Text>
              <Text style={{ marginBottom: "5px" }}>{item.location}</Text>
              <Text style={{ marginBottom: "3px" }}>
                Currently working status:{" "}
                {item.currentlyWorking ? "Working" : "Not working"}
              </Text>
            </View>
          );
        })}
      </View>
    </>
  );
}