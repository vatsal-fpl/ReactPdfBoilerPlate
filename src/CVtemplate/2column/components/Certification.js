import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Styles } from "./Objective";

export default function Certification(props) {
  return (
    <>
      <View style={{ fontSize: ".5cm", margin: "0" }}>
        <Text
          style={Styles}
        >
          Certificates
        </Text>
        {props.studentData.certification.map((c) => {
          return (
            <View key={c.id} style={{ fontSize: ".5cm" }}>
              <Text style={{ marginBottom: ".2cm" }}>
                {c.id} {c.title}
              </Text>
              <Text style={{ marginBottom: ".2cm" }}>{c.issuer}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
}