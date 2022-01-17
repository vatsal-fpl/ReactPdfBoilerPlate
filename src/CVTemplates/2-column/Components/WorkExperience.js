import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

export const Styles = StyleSheet.create({
  WorkExperience: {
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

export default function WorkExperience(props) {
  return (
    <>
      <View style={{ fontSize: ".6cm", margin: "0" }}>
        <Text style={Styles.WorkExperience}>
          Work Experience
        </Text>
        {props.studentData.workExperience.map((workexperience) => {
          return (
            <View key={workexperience.id} style={{ fontSize: ".5cm" }}>
              <Text style={{ marginBottom: ".2cm" }}>
                {workexperience.id} {workexperience.companyName}
              </Text>
              <Text style={{ marginBottom: ".2cm" }}>{workexperience.location}</Text>
              <Text style={{ marginBottom: ".2cm" }}>
                Position: {workexperience.position}
              </Text>
            </View>
          );
        })}
      </View>
    </>
  );
}