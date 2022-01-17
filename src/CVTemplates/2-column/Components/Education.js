import React from "react";
import { View, Text, StyleSheet} from "@react-pdf/renderer";

export const Styles = StyleSheet.create({
  Edu: {
          padding: "5px",
          borderTop: "1.5px",
          textAlign: "center",
          textTransform: "uppercase",
          margin: "5px",
          backgroundColor: "#e2d4cf",
          fontSize: ".6cm",
          //borderRadius:".5cm",
          borderLeftWidth: "5px",
  },
});

export default function Education(props) {
  return (
    <>
      <Text
        style={Styles.Edu}> Education </Text>
      {props.studentData.education.map((edu) => {
        return (
          <View
            key={edu.id}
            style={{ paddingBottom: "0.2cm", fontSize: "0.5cm" }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ marginBottom: "5px" }}>
                {edu.id} {edu.degree}
              </Text>
              <Text>{edu.finalScore}</Text>
            </View>
            <Text style={{ marginBottom: "5px" }}>
              Institute: {edu.instituteName ? edu.instituteName : null}
            </Text>
            <Text style={{ marginBottom: "5px" }}>
              University: {edu.university}
            </Text>
          </View>
        );
      })}
    </>
  );
}