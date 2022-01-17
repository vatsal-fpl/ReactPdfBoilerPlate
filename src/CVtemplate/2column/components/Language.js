import React from "react";
import { View, Text, StyleSheet} from "@react-pdf/renderer";
import { Styles } from "./Objective";

export default function Language(props) {
  return (
    <>
      <View>
        <Text
          style={Styles}
        >
          Language
        </Text>
        {props.studentData.language.map((l) => {
          return (
            <View
              style={{
                flexDirection: "row",
                fontSize: ".5cm",
                justifyContent: "space-between",
                marginTop: "5px",
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