import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import Heading from "./Heading";
const style = StyleSheet.create({
  workPostionHeading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "Arial",
    fontSize: "11px",
    fontWeight: 700,
    marginBottom: "2px",
  },
  companyText: {
    fontSize: "11px",
    fontFamily: "Arial",
    fontWeight: "700",
    marginBottom: "2px",
  },
  workDescription: {
    flexDirection: "row",
    fontSize: "10px",
    textAlign: "justify",
    color: "#2A2A2A",
    paddingLeft: "5px",
    fontFamily: "Arial",
    fontWeight: "400",
  },
});
export default function WorkExperience({ studentData }) {
  return (
    <>
      <Heading heading="Work Experience" />
      {studentData.workExperience.map((item) => {
        return (
          <View
            key={item.id}
            style={{ marginBottom: "5px", paddingLeft: "10px" }}
          >
            <View style={style.workPostionHeading}>
              <Text>{item.position}</Text>
              <Text style={{ fontWeight: "400" }}>
                {item.startMonth.toUpperCase() + " "}
                {item.startYear + " "}
                {item.currentlyWorking === false
                  ? item.endMonth + " " + item.endYear
                  : ""}
              </Text>
            </View>
            <Text style={style.companyText}>
              {item.companyName}- {item.location}
            </Text>
            <View style={style.workDescription}>
              <Text>{item.description}</Text>
            </View>
          </View>
        );
      })}
    </>
  );
}
