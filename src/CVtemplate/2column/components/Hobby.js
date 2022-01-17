import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Styles } from "./Objective";

export default function Hobby(props) {
  return (
    <View>
      <Text style={Styles}>Hobby
        </Text>
      {props.studentData.hobby.map((s) => {
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
            <Text>{s.competence}</Text>
          </View>
        );
      })}
    </View>
  );
}