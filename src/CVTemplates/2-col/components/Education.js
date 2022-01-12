import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { Styles } from "./Header";
export default function Education(props) {
  return (
    <>
      <Text style={Styles.section}>Education</Text>
      {props.studentData.education.map((e) => {
        return (
          <View
            key={e.id}
            style={{ paddingBottom: "0.2cm", fontSize: ".45cm" }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ marginBottom: "5px" }}>
                {e.id} {e.degree}
              </Text>
              <Text>{e.finalScore}</Text>
            </View>
            <Text style={{ marginBottom: "5px" }}>
              Institute: {e.instituteName ? e.instituteName : null}
            </Text>
            <Text style={{ marginBottom: "5px" }}>
              University: {e.university}
            </Text>
          </View>
        );
      })}
    </>
  );
}
