import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Styles } from "./Objective";

export default function Skills(props) {
  return (
    <View>
      <Text style={Styles}>
        Skills
        </Text>
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
            <Text>{s.title}</Text>
          </View>
        );
      })}
    </View>
  );
}