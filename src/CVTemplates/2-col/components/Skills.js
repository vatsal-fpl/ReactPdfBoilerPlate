import React from "react";
import { View, Text } from "@react-pdf/renderer";
import Heading from "./Heading";
export default function Skills(props) {
  const { studentData } = props;
  return (
    <View>
      <Heading title="Skills" />
      {studentData.skill.map((skill) => {
        return (
          <View
            key={skill.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: ".45cm",
            }}
          >
            <Text>{skill.title}</Text>
            <Text>{skill.competence}</Text>
          </View>
        );
      })}
    </View>
  );
}
