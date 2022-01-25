import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Heading from "./Heading";
const style = StyleSheet.create({
  languageText: {
    fontSize: "11px",
    fontFamily:"Arial",
    color: "#000000",
    fontWeight: "400",
  },
});
export default function Languages({ studentData }) {
  return (
    <>
      <Heading heading="Languages" />
      <Text style={style.languageText}>
        Fluent in{" "}
        {studentData.language.map((language) => {
          return <Text key={language.id}>{language.title + ","}</Text>;
        })}
        (Speaking reading and writing)
      </Text>
    </>
  );
}
