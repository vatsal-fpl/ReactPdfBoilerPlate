import React from "react";
import { View, Text } from "@react-pdf/renderer";

export default function WorkExperience(props) {
  return (
    <>
      <View style={{ fontSize: ".6cm", margin: "0" }}>
        <Text
          style={{
            padding: "5px",
            borderBottom: "1px",
            textTransform: "uppercase",
            marginBottom: "5px",
            backgroundColor: "#D3D3D3",
          }}
        >
          WorkExperience
        </Text>
        {props.studentData.workExperience.map((w) => {
          return (
            <View key={w.id} style={{ fontSize: ".5cm" }}>
              <Text style={{ marginBottom: ".2cm" }}>
                {w.id} {w.companyName}
              </Text>
              <Text style={{ marginBottom: ".2cm" }}>{w.location}</Text>
              <Text style={{ marginBottom: ".2cm" }}>
                Issue Date:{w.position}
              </Text>
            </View>
          );
        })}
      </View>
    </>
  );
}