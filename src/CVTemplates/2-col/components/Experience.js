import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { Styles } from "./Header";

export default function Experience(props) {
  return (
    <View>
      <Text style={Styles.section}>Experience</Text>
      {props.studentData.workExperience.map((ex) => {
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
