import React from "react";
import { Page, View, Document, StyleSheet, Text } from "@react-pdf/renderer";

// Template structure
import { TemplateStructure } from "./TemplateStructure";
// Components
import Profile from "./components/Profile";
import Objective from "./components/Objective";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Languages from "./components/Languages";

// components
const GenerateRows = (props) => {
  const generateStyle = (row) => {
    return {
      width: "100%",
      flexDirection: "row",
    };
  };

  return (
    <>
      {props.page.rows.map((row) => (
        <View style={generateStyle(row)} key={row.id}>
          {row.columns.map((col) => (
            <GenerateColumns
              column={col}
              studentData={props.studentData}
              key={col.id}
            />
          ))}
        </View>
      ))}
    </>
  );
};

const GenerateColumns = (props) => {
  const generateStyle = (column) => {
    return {
      width: column.width,
    };
  };

  return (
    <View style={generateStyle(props.column)}>
      {props.column.sections.map((section) => (
        <GenerateSection
          sectionDetails={section}
          studentData={props.studentData}
          key={section.id}
        />
      ))}
    </View>
  );
};

const GenerateSection = (props) => {
  const styles = StyleSheet.create({
    section: {
      //minHeight: props.sectionDetails.minHeight,
      minWidth: props.sectionDetails.minWidth,
      padding: props.sectionDetails.padding
        ? props.sectionDetails.padding
        : "0.2cm 0.5cm",
      fontSize: "11px",
    },
  });

  const loadComponent = (sectionDetail, studentData) => {
    switch (sectionDetail.sectionName) {
      case "personal-details":
        return <Profile studentData={studentData} />;

      case "objective":
        return <Objective studentData={studentData} />;

      case "project":
        return <Projects studentData={studentData} />;

      case "education":
        return <Education studentData={studentData} />;

      case "certification":
        return <Certifications studentData={studentData} />;

      case "skills":
        return <Skills studentData={studentData} />;
      case "language":
        return <Languages studentData={studentData} />;
      default:
        return console.log("Hello");
    }
  };

  return (
    <View style={styles.section}>
      {loadComponent(props.sectionDetails, props.studentData)}
    </View>
  );
};

export default function Basic(props) {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#FFF",
      padding: "1cm",
      flexDirection: "column",
      fontFamily: "Roboto",
    },
  });

  return (
    <Document
      title={
        props.studentData.student.firstName +
        " " +
        props.studentData.student.lastName
      }
      author="Fineprint CV Builder"
    >
      {TemplateStructure.pages.map((page) => (
        <Page
          size="A4"
          style={styles.page}
          key={page.id}
          style={{ minHeight: "100vh", minWidth: "100vw" }}
        >
          <GenerateRows page={page} studentData={props.studentData} />
        </Page>
      ))}
      {props.studentData.paidUser ? null : (
        <View>
          <Text
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              fontSize: "8px",
              marginRight: "7px",
              marginBottom: "4px",
            }}
          >
            Powered By : placements.fineprint.legal
          </Text>
        </View>
      )}
    </Document>
  );
}
