import { Text } from "@react-pdf/renderer";

export default function objective(props) {
  return (
    <>
      <Text
        style={{
          color: "#0984e3",
          padding: "5px",
          borderBottom: "1px",
          textTransform: "uppercase",
          margin: "5px",
          backgroundColor: "#fdcb6e",
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
