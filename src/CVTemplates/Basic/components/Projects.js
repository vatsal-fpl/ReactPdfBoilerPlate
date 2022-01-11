import React from "react";
import { View, Text } from "@react-pdf/renderer";

export default function Projects(props) {
  return (
    <>
      <Text
        style={{
          color: "#0984e3",
          padding: "5px",
          borderBottom: "1px",
          textTransform: "uppercase",
          backgroundColor: "#fdcb6e",
          fontSize: ".6cm",
        }}
      >
        Projects
      </Text>
      <View style={{ fontSize: "11px", marginBottom: "5px" }} wrap={false}>
        {props.studentData.project.map((item) => {
          return (
            <View style={{ fontSize: ".5cm", margin: "5px" }} key={item.id}>
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
