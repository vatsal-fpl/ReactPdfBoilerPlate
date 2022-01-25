import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import Heading from "./Heading";

const style = StyleSheet.create({
  prjectContainer: {
    marginBottom: "5px",
    fontStyle: "normal",
  },
  projectTitle: {
    fontSize: "11px",
    fontFamily: "Arial",
    color: "#000000",
    fontWeight: "700",
    paddingLeft: "10px",
  },
  projectDescription: {
    fontFamily: "Arial",
    fontSize: "10px",
    color: "#2A2A2A",
    fontWeight: "400",
    textAlign: "justify",
  },
});

export default function Projects({ studentData }) {
  return (
    <>
      <Heading heading="Projects" />
      <View>
        {studentData.project.map((project) => {
          return (
            <View key={project.id} style={style.prjectContainer}>
              <View>
                <Text style={style.projectTitle}>{project.title}</Text>
                <View style={{ paddingLeft: "15px" }}>
                  <Text style={style.projectDescription}>
                    {project.description}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
}
