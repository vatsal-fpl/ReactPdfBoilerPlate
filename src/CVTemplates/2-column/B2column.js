import React from 'react';
import { Page, View, Document, StyleSheet, Text } from '@react-pdf/renderer';

// template-structure
import { TemplateStructure } from './TemplateStructure2column';

// components
import PersonalDetails from './Components/PersonalDetails';
import Objective from './Components/Objective';
import WorkExperience from './Components/WorkExperience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Certifications from './Components/Certifications';
import Skills from './Components/Skills';
import Languages from './Components/Languages';

//components

const GenerateRows = ({page, studentData}) => {
    const generateStyle = (row) => {
        return {
        row: row.width,
        flexDirection: 'row',
    };
  };

    return (
        <>
            {page.rows.map((row) => (
                <View style={generateStyle(row)} key={row.id} >
                    {row.columns.map((col) => (
                        <GenerateColumns column={col} studentData={studentData} key={col.id} />
                    ))}
                </View>
            ))}
        </>
    );
};

const GenerateColumns = ({column, studentData}) => {
    const generateStyle = (column) => {
        return {
        width: column.width,
        };
        
    };

    return (
        <View style={generateStyle(column)}>
            {column.sections.map((section) => (
                <GenerateSection sectionDetails={section} studentData={studentData} key={section.id}/>
            ))}
        </View>
    );
};

const GenerateSection = ({sectionDetails, studentData}) => {
    const styles = StyleSheet.create({
        section:{
            //minHeight: sectionDetails.minHeight,
            minWidth: sectionDetails.minWidth,
            //maxHeight: sectionDetails.maxHeight,
            padding: sectionDetails.padding ? sectionDetails.padding : '0.2cm 0.5cm',
            fontSize: "11px",
        }
    });

    const loadComponent = (sectionDetail, studentData) => {
        switch (sectionDetail.sectionName){
            case 'personal-details':
                return <PersonalDetails studentData={studentData} />;
            case 'objective':
                return <Objective studentData={studentData} />;
            case 'education':
                    return <Education studentData={studentData} />;
            case 'skill':
                    return <Skills studentData={studentData} />;
            case 'work-experience':
                return <WorkExperience studentData={studentData} />;
            case 'project':
                return <Projects studentData={studentData} />;
            case 'certification':
                return <Certifications studentData={studentData} />;
            case 'language':
                return <Languages studentData={studentData} />;
            default:
                return console.log("loading");
        }
    }

    return (
        <View style={styles.section}>
            {loadComponent(sectionDetails,studentData)}
        </View>
    )
}

export default function B2column({studentData}) {

    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#FFF',
            padding: '1cm',
            flexDirection: 'column',
            
        },
    });

    return (
        <Document title={studentData.student.firstName + ' ' +studentData.student.lastName} author="Fineprint CV Builder">
            {TemplateStructure.pages.map((page)=>(
                <Page size="A4" style={styles.page}>
                    <GenerateRows page={page} studentData={studentData}/>
                </Page>
            ))}
            {
                studentData.paidUser
                ? null
                : <View>
                    <Text style={{position: 'absolute', bottom: 0, right: 0, fontSize: '8px', marginRight: '7px', marginBottom: '4px'}}>Powered By : placements.fineprint.legal</Text>
                </View>
            }
        </Document>
    );
}