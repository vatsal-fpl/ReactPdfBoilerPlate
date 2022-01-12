import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { Styles } from "./Header";
export default function Projects(props) {
  return (
    <>
      <Text style={Styles.section}>Projects</Text>
      <View style={{ marginBottom: "5px" }} wrap={false}>
        {props.studentData.project.map((item) => {
          return (
            <View
              style={{ fontSize: ".45cm", marginBottom: "5px" }}
              key={item.id}
            >
              <Text style={{ marginBottom: "5px" }}>
                {item.id} {item.title}
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
