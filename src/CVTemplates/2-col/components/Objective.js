import { Text } from "@react-pdf/renderer";
import Heading from "./Heading";
export default function objective(props) {
  const { studentData } = props;
  return (
    <>
      <Heading title="objective" />
      <Text style={{ fontSize: ".4cm" }}>{studentData.student.objective}</Text>
    </>
  );
}
