import React from 'react';
import { Page, View, Document, StyleSheet, Text } from '@react-pdf/renderer';

// template-structure
import { TemplateStructure } from './TemplateStructure';

// components
import Personaldetails from './components/Personaldetails';
import Objective from './components/Objective';
import WorkExperience from './components/workExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Language from './components/Language';
import Education from './components/Education';
import Hobby from './components/Hobby';
import Certifications from './components/Certifications';


const GenerateRows = ({page, studentData}) => {
    const generateStyle = (row) => {
        return(
            {
                width: '100%',
                flexDirection: 'row',
            }
        )
    }
    
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
    )
}

const GenerateColumns = ({column, studentData}) => {
    const generateStyle = (column) => {
        return(
            {
                width: column.width
            }
        )
    }

    return (
        <View style={generateStyle(column)}>
            {column.sections.map((section) => (
                <GenerateSection sectionDetails={section} studentData={studentData} />
            ))}
        </View>
    )
}

const GenerateSection = ({sectionDetails, studentData}) => {
    const styles = StyleSheet.create({
        section:{
            minHeight: sectionDetails.minHeight,
            maxHeight: sectionDetails.maxHeight,
            padding: sectionDetails.padding ? sectionDetails.padding : '0.2cm 0.5cm',
        }
    });

    const loadComponent = (sectionDetails, studentData) => {
        switch (sectionDetails.sectionName){
            case 'personal-details':
                return <Personaldetails studentData={studentData} />;
            case 'objective':
                return <Objective studentData={studentData} />;
            case 'work-experience':
                return <WorkExperience studentData={studentData} />;
            case 'skills':
                return <Skills studentData={studentData} />;
            case 'language':
                return <Language studentData={studentData} />;
            case 'project':
                return <Projects studentData={studentData} />;
            case 'education':
                return <Education studentData={studentData} />;
            case 'hobby':
                return <Hobby studentData={studentData} />;
            case 'certification':
                return <Certifications studentData={studentData} />;
            default:
                return null;
        }
    }

    return (
        <View style={styles.section}>
            {loadComponent(sectionDetails, studentData)}
        </View>
    )
}

export default function Basic({studentData}) {

    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#FFF',
            padding: '1cm',
            flexDirection: 'column',
            // fontFamily: studentData.student.selectedFontFamily || 'Roboto',
        },
    });

    return (
        <Document title={studentData.student.firstName + ' ' + studentData.student.lastName} author="Fineprint CV Builder">
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
    )
}