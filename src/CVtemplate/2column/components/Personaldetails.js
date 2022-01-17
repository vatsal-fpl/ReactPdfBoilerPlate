import React from "react";
import ReactDOM  from "react-dom";
import {Text, StyleSheet, View } from '@react-pdf/renderer';

export const Styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      padding: "5px",
    },
    header: {
      marginBottom: "5px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "5px",
      backgroundColor: "beige",
    },
    section: {
      
      borderBottom: "1px solid #000",
      padding: "5px",
      margin: "5px",
      textTransform: "uppercase",
      fontSize: ".6cm",
    }
});

export default function Personaldetails(pd) {
    return (
      <>
        <View style={Styles.header}>
          <Text style={{ fontSize: "25px", alignSelf: "center" }}>
            {pd.studentData.student.firstName}{" "}
            {pd.studentData.student.lastName}
          </Text>
          {/* {pd.studentData.socialNetwork.map((social) => {
            return (
              <Link src={social.profileLink} key={social.id}>
                {social.networkName}
              </Link>
            );
          })} */}
          <View style={{ fontSize: "11px", marginBottom: "5px" }}>
            <Text>{pd.studentData.student.contactNumber}</Text>
            <Text>{pd.studentData.student.email}</Text>
          </View>
        </View>
      </>
    );
  }