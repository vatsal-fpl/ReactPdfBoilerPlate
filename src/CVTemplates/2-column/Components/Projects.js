import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

export const Styles = StyleSheet.create({
  Project: {
          padding: "5px",
          borderTop: "1.5px",
          textAlign: "center",
          textTransform: "uppercase",
          margin: "5px",
          backgroundColor: "#e2d4cf",
          fontSize: ".6cm",
          //borderRadius:".5cm",
          borderLeftWidth: "5px",
  },
});

export default function Projects(props) {
  return (
    <>
      <Text style={Styles.Project}> Projects </Text>
      <View style={{ fontSize: "11px", marginBottom: "5px" }} wrap={false}>
        {props.studentData.project.map((pr) => {
          return (
            <View style={{ fontSize: ".5cm", margin: "5px" }} key={pr.id}>
              <Text style={{ marginBottom: "5px" }}>
                {pr.id} {pr.title}
              </Text>
              <Text style={{ marginBottom: "5px" }}>{pr.description}</Text>
              <Text style={{ marginBottom: "3px" }}>
                Currently working status:{" "}
                {pr.currentlyWorking ? "Working" : "Not working"}
              </Text>
            </View>
          );
        })}
      </View>
    </>
  );
}