import { Text, StyleSheet } from "@react-pdf/renderer";

export const Styles = StyleSheet.create({
  Obj: {
          padding: "5px",
          borderTop: "1.5px",
          textAlign: "center",
          textTransform: "uppercase",
          margin: "5px",
          backgroundColor: "#e2d4cf",
          fontSize: ".6cm",
          //borderRadius:".5cm",
          borderLeftWidth: "5px",
          
  },
});

export default function Objective(props) {
  return (
    <>
      <Text style={Styles.Obj}>
        Objective
      </Text>
      <Text style={{ fontSize: ".5cm" }}>
         {props.studentData.student.objective}
      </Text>
    </>
  );
}