import React from "react";
import { View, Text,StyleSheet } from "@react-pdf/renderer";


export const Styles = StyleSheet.create({
  skill: {
          padding: "5px",
          borderTop: "1.5px",
          textAlign: "center",
          textTransform: "uppercase",
          margin: "5px",
          backgroundColor: "#e2d4cf",
          fontSize: ".6cm",
          //borderRadius:".5cm",
          borderLeftWidth: "5px",
  
  items: {
    paddingBottom: "0.2cm",
  },
},
});

export default function Skills(props) {
  return (
    <View>
      <Text style={Styles.skill}>Skills</Text>
      {props.studentData.skill.map((skills) => {
        return (
          <View
            key={skills.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: ".5cm",
              paddingBottom: "0.2cm",
            }}
          >
            <Text style={Styles.skill.items}>{skills.title}</Text>
            <Text style={Styles.skill.items}>{skills.competence}</Text>
          </View>
        );
      })}
    </View>
  );
}