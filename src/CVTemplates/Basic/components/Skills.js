import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { Style, Styles } from "./Header";
export default function Skills(props) {
  return (
    <View>
      <Text style={Styles.section}>Skills</Text>
      {props.studentData.skills.map((s) => {
        return (
          <View
            key={s.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: ".5cm",
            }}
          >
            <Text style={Styles.skill.items}>{s.title}</Text>
            <Text style={Styles.skill.items}>{s.competence}</Text>
          </View>
        );
      })}
    </View>
  );
}
