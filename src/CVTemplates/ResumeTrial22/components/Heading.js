import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
const style = StyleSheet.create({
  headingText: {
    fontSize: "12px",
    color: "#00AF50",
    borderBottom: "1px solid #C4C4C4",
    paddingBottom: "2px",
    textTransform: "uppercase",
    marginBottom: "2px",
  },
});

export default function Heading(props) {
  return (
    <>
      <View>
        <Text style={style.headingText}>{props.heading}</Text>
      </View>
    </>
  );
}
