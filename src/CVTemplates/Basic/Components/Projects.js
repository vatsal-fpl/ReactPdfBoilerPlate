import React from "react";
import { View, Text } from "@react-pdf/renderer";

export default function Projects(props) {
  return (
    <>
      <Text
        style={{
          padding: "5px",
          borderBottom: "1px",
          textTransform: "uppercase",
          backgroundColor: "#D3D3D3",
          fontSize: ".6cm",
        }}
      >
        Projects
      </Text>
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