import React from "react";
import { View, Text } from "@react-pdf/renderer";

export default function Languages(props) {
  return (
    <>
      <View>
        <Text
          style={{
            color: "#0984e3",
            padding: "5px",
            borderBottom: "1px",
            textTransform: "uppercase",
            backgroundColor: "#fdcb6e",
            fontSize: ".6cm",
          }}
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
