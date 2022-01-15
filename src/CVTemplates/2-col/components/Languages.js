import React from "react";
import { View, Text } from "@react-pdf/renderer";
import Heading from "./Heading";
export default function Languages(props) {
  const { studentData } = props;
  return (
    <>
      <View>
        <Heading title="Languages" />
        {studentData.language.map((language) => {
          return (
            <View
              style={{
                flexDirection: "row",
                fontSize: ".45cm",
                justifyContent: "space-between",
              }}
              key={language.id}
            >
              <Text>{language.title}</Text>
              <Text>{language.proficiency}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
}
