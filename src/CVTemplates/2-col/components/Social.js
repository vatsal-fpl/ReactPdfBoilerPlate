import React from "react";
import { View, Link } from "@react-pdf/renderer";
import Heading from "./Heading";

export default function Social(props) {
  const { studentData } = props;
  return (
    <>
      <View>
        <Heading title="Social" />
        {studentData.socialNetwork.map((social) => {
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
