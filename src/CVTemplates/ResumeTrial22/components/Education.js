import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Heading from "./Heading";
const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    fontSize: "11px",
  },
  locationText: {
    fontSize: "9px",
    marginRight: "2px",
  },

  finalScoreText: {
    fontSize: "9px",
    color: "#000000",
    display: "flex",
    flexDirection: "row",
  },
});

export default function Education({ studentData }) {
  return (
    <>
      <Heading heading="Education" />
      {studentData.education.map((item) => {
        return (
          <View
            key={item.id}
            style={{ marginBottom: "5px", fontFamily: "Arial" }}
          >
            <View style={style.container}>
              <View style={{ marginRight: "auto" }}>
                <Text>
                  {item.instituteName} ({item.degree})
                </Text>
              </View>
              <View>
                <Text>
                  {item.startYear} - {item.endYear}
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={style.locationText}>
                  {item.city}, {item.state}
                </Text>
              </View>
              <View style={{ fontSize: "9px" }}>
                <Text>{item.finalScore}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </>
  );
}
