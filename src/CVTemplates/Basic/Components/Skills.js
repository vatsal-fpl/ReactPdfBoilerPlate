import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { Styles } from "./PersonalDetails";

export default function Skills(props) {
  return (
    <View>
      <Text style={Styles.section}>Skills</Text>
      {props.studentData.skill.map((s) => {
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