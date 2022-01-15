import React from "react";
import { Text, View } from "@react-pdf/renderer";
import Heading from "./Heading";

export default function Awards(props) {
  const { studentData } = props;
  return (
    <>
      <Heading title="Awards" />
      {studentData.award.map((award) => {
        return (
          <View style={{ fontSize: ".45cm" }} key={award.id}>
            <Text>{award.title}</Text>
            <Text>{award.issuer}</Text>
          </View>
        );
      })}
    </>
  );
}
