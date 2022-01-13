import React from "react";
import { View, Text, StyleSheet} from "@react-pdf/renderer";

export default function Language(props) {
  return (
    <>
      <View>
        <Text
          style={{
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