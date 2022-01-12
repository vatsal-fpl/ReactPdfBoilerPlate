import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { Styles } from "./Header";
export default function Language(props) {
  return (
    <>
      <View>
        <Text style={Styles.section}>Language</Text>
        {props.studentData.language.map((l) => {
          return (
            <View
              style={{
                flexDirection: "row",
                fontSize: ".45cm",
                justifyContent: "space-between",
              }}
              key={l.id}
            >
              <Text>{l.title}</Text>
              <Text>{l.proficiency}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
}
