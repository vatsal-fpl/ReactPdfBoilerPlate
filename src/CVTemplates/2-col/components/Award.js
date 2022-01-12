import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { Styles } from "./Header";

export default function Award(props) {
  return (
    <>
      <Text style={Styles.section}>Projects</Text>
      {props.studentData.award.map((a) => {
        return (
          <View style={{ fontSize: ".45cm" }} key={a.id}>
            <Text>{a.title}</Text>
            <Text>{a.issuer}</Text>
          </View>
        );
      })}
    </>
  );
}
