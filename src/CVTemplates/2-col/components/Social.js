import React from "react";
import { View, Link, Text } from "@react-pdf/renderer";
import { Styles } from "./Header";

export default function Social(props) {
  return (
    <>
      <View>
        <Text style={Styles.section}> Social</Text>

        {props.studentData.socialNetwork.map((social) => {
          return (
            <View key={social.id}>
              <Link src={social.profileLink} key={social.id}>
                {social.networkName}
              </Link>
            </View>
          );
        })}
      </View>
    </>
  );
}
