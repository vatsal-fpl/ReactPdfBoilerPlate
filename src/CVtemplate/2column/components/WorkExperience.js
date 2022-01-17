import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Styles } from "./Objective";

export default function WorkExperience(pro) {
  return (
    <>
      <Text
        style={Styles}>
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