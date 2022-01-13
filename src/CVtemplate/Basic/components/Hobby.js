import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Styles } from "./Personaldetails";

export default function Hobby(props) {
  return (
    <View>
      <Text style={{
          color: "blue",
          padding: "5px",
          paddingBottom: '5px',
          textAlign: 'center',
          borderTop: '2px',
          borderBottom: '2px',
          textTransform: "uppercase",
          marginBottom: "5px",
          marginTop: "5px",
          // backgroundColor: "lightpink",
          fontSize: ".6cm",
          fontStyle: 'bold'
        }}>Hobby</Text>
      {props.studentData.hobby.map((s) => {
        return (
          <View
            key={s.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: ".5cm",
            }}
          >
            <Text>{s.title}</Text>
            <Text>{s.competence}</Text>
          </View>
        );
      })}
    </View>
  );
}