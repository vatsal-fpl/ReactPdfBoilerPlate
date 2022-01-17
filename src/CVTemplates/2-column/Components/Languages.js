import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

export const Styles = StyleSheet.create({
    Language: {
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
      <Text style={Styles.Language}> Languages </Text>
      {props.studentData.language.map((lang) => {
        return (
          <View
            key={lang.id}
            style={{ paddingBottom: "0.2cm", fontSize: "0.5cm" }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ marginBottom: "5px" }}>
                {lang.id} {lang.title}
              </Text>
              <Text>{lang.proficiency}</Text>
            </View>
            
          </View>
        );
      })}
    </>
  );
}