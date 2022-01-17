import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Styles } from "./Objective";

export default function Projects(pro) {
  return (
    <>
      <Text
        style={Styles}>
        Projects
      </Text>
      <View style={{ fontSize: "11px", marginBottom: "5px" }} wrap={false}>
        {pro.studentData.project.map((item) => {
          return (
            <View style={{ fontSize: ".5cm", margin: "5px" }}>
              <Text style={{ marginBottom: "5px" }}>
                {item.title}
              </Text>
              <Text style={{ marginBottom: "5px" }}>{item.description}</Text>
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