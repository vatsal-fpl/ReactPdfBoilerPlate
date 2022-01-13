import { Text } from "@react-pdf/renderer";

export default function Objective(props) {
  return (
    <>
      <Text
        style={{
          padding: "5px",
          borderBottom: "1px",
          textTransform: "uppercase",
          margin: "5px",
          backgroundColor: "#D3D3D3",
          fontSize: ".6cm",
        }}
       >
        Objective
      </Text>
      <Text style={{ fontSize: ".5cm" }}>
         {props.studentData.student.objective}
      </Text>
    </>
  );
}