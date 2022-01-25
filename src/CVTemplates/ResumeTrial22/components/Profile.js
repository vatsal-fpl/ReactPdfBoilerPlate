import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import Heading from "./Heading";
const style = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "5px",
  },
  imageContainer: {
    marginRight: "12px",
    alignSelf: "center",
  },
  image: {
    height: "70px",
    width: "70px",
    border: "1px solid #2A2A2A",
    marginRight: "5px",
    borderRadius: "50px",
  },
  objectiveText: {
    fontSize: "10px",
    backgroundColor: "#00AF50",
    padding: "10px",
    color: "#FFFFFF",
    //fontFamppily: "Arial"
  },
});
export default function Profile({ studentData }) {
  return (
    <>
      <View style={style.flexContainer}>
        <View style={style.imageContainer}>
          <Image src={studentData.student.profilePicture} style={style.image} />
        </View>
        <View style={{ flexBasis: "70%", alignSelf: "center" }}>
          <Text style={style.objectiveText}>
            {studentData.student.objective}
          </Text>
        </View>
      </View>
    </>
  );
}
