import React from "react";
import {
  Page,
  View,
  Document,
  StyleSheet,
  Text,
  Font,
} from "@react-pdf/renderer";

// template-structure
import { TemplateStructure } from "./TemplateStructure";

// components
import Awards from "./components/Awards";
import PersonalDetails from "./components/PersonalDetails";
import Profile from "./components/Profile";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Education from "./components/Education";

//import Font
import Arial from "./assets/fonts/Arial/Arialn.ttf";

Font.register({ family: "Arial", src: Arial });

const GenerateRows = ({ page, studentData }) => {
  const generateStyle = (row) => {
    return {
      width: "100%",
      flexDirection: "row",
    };
  };

  return (
    <>
      {page.rows.map((row) => (
        <View style={generateStyle(row)}>
          {row.columns.map((col) => (
            <GenerateColumns column={col} studentData={studentData} />
          ))}
        </View>
      ))}
    </>
  );
};

const GenerateColumns = ({ column, studentData }) => {
  const generateStyle = (column) => {
    return {
      width: column.width,
      borderRight: column.borderRight,
    };
  };

  return (
    <View style={generateStyle(column)}>
      {column.sections.map((section) => (
        <GenerateSection sectionDetails={section} studentData={studentData} />
      ))}
    </View>
  );
};

const GenerateSection = ({ sectionDetails, studentData }) => {
  const styles = StyleSheet.create({
    section: {
      minHeight: sectionDetails.minHeight,
      maxHeight: sectionDetails.maxHeight,
      padding: sectionDetails.padding ? sectionDetails.padding : "5px",
    },
  });

  const loadComponent = (sectionDetails, studentData) => {
    switch (sectionDetails.sectionName) {
      case "award":
        return <Awards studentData={studentData} />;
      case "project":
        return <Projects studentData={studentData} />;

      case "personal-detail":
        return <PersonalDetails studentData={studentData} />;
      case "profile":
        return <Profile studentData={studentData} />;
      case "certification":
        return <Certifications studentData={studentData} />;
      case "skill":
        return <Skills studentData={studentData} />;
      case "language":
        return <Languages studentData={studentData} />;

      case "education":
        return <Education studentData={studentData} />;
      case "work-experience":
        return <WorkExperience studentData={studentData} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.section}>
      {loadComponent(sectionDetails, studentData)}
    </View>
  );
};

export default function ResumeTrial22({ studentData }) {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#FFF",
      padding: "1cm",
      flexDirection: "column",
      fontFamily: studentData.student.selectedFontFamily,
      minHeight: "100vh",
      minWidth: "100vw",
    },
  });

  return (
    <Document
      title={studentData.student.firstName + " " + studentData.student.lastName}
      author="Fineprint CV Builder"
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      {TemplateStructure.pages.map((page) => (
        <Page size="A4" style={styles.page}>
          <GenerateRows page={page} studentData={studentData} />
        </Page>
      ))}
      {studentData.paidUser ? null : (
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
