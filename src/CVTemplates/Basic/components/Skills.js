import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { Style, Styles } from "./Profile";
export default function Skills(props) {
  return (
    <View>
      <Text style={Styles.section}>Skills</Text>
      {props.studentData.skill.map((skill) => {
        return (
          <View
            key={skill.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: ".5cm",
            }}
          >
            <Text style={Styles.skill.items}>{skill.title}</Text>
            <Text style={Styles.skill.items}>{skill.competence}</Text>
          </View>
        );
      })}
    </View>
  );
}
