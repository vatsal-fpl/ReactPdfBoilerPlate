import React from "react";
import { Text, View } from "@react-pdf/renderer";
import Heading from "./Heading";
export default function WorkExperience(props) {
  const { studentData } = props;
  return (
    <View>
      <Heading title="WorkExperience" />
      {studentData.workExperience.map((ex) => {
        return (
          <View key={ex.id} style={{ fontSize: ".4cm" }}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              key={ex.id}
            >
              <Text>{ex.position}</Text>
              <Text>StartMonth:{ex.startMonth}</Text>
              <Text>
                Working status:{ex.currentlyWorking ? "Working" : ex.endMonth}
              </Text>
            </View>
            <Text>Location: {ex.location}</Text>
          </View>
        );
      })}
    </View>
  );
}
