import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Heading from "./Heading";

const style = StyleSheet.create({
  award: {
    fontSize: "10px",
    fontFamily: "Arial",
    color: "#2A2A2A",
    fontWeight: "400",
    paddingLeft: "10px",
  },
});

export default function Awards({ studentData }) {
  return (
    <>
      <Heading heading="Honors and Awards" />
      {studentData.award.map((award) => {
        return (
          <View key={award.id} style={style.award}>
            <Text>
              {award.issuer + "-"}
              {award.title}
            </Text>
          </View>
        );
      })}
    </>
  );
}
