import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import Heading from "./Heading";
const style = StyleSheet.create({
  skillList: {
    fontSize: "11px",
    fontWeight: "400",
    fontFamily: "Arial",
    fontStyle: "normal",
    color: "#000000",
    textAlign: "justify",
  },
});

export default function Skills({ studentData }) {
  return (
    <>
      <Heading heading="Skills" />
      <View>
        {studentData.skill.map((skill) => {
          return (
            <View key={skill.id} style={style.skillList}>
              <Text>{skill.title}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
}
