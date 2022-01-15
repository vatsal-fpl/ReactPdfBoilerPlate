import React from "react";
import { View, Text } from "@react-pdf/renderer";
import Heading from "./Heading";
export default function Education(props) {
  const { studentData } = props;
  return (
    <>
      {studentData.education.map((eduitem) => {
        return (
          <View
            key={eduitem.id}
            style={{ paddingBottom: "0.2cm", fontSize: ".45cm" }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ marginBottom: "5px" }}>
                {eduitem.id} {eduitem.degree}
              </Text>
              <Text>{eduitem.finalScore}</Text>
            </View>
            <Text style={{ marginBottom: "5px" }}>
              Institute: {eduitem.instituteName ? eduitem.instituteName : null}
            </Text>
            <Text style={{ marginBottom: "5px" }}>
              University: {eduitem.university}
            </Text>
          </View>
        );
      })}
    </>
  );
}
