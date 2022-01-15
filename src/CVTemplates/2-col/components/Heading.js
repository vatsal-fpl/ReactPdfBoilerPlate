import React from "react";
import { Text } from "@react-pdf/renderer";
const Styles = {
  fontSize: ".5cm",
  backgroundColor: "#BDC3C8",
  color: "#2C3E50",
  textTransform: "uppercase",
  borderBottom: "1px solid #000",
};
export default function Heading(props) {
  return (
    <>
      <Text style={Styles}>{props.title}</Text>
    </>
  );
}
