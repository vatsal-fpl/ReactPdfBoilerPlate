import { Text } from "@react-pdf/renderer";
import { Styles } from "./Header";
export default function objective(props) {
  return (
    <>
      <Text style={Styles.section}>Objective</Text>
      <Text style={{ fontSize: ".4cm" }}>
        {props.studentData.student.objective}
      </Text>
    </>
  );
}
