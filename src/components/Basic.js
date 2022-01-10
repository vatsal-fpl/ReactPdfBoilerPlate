import React from 'react';
import { Page, View, Document, StyleSheet, Text } from '@react-pdf/renderer';
import '../fonts.css';

// template-structure
import { TemplateStructure } from './TemplateStructure';

// Components
import Header from './Header';
import Objective from './Objective';
import Projects from './Projects';
import Education from './Education';
import Certificates from './Certificates';
import Skills from './Skills';
import Language from './Languge';

let key=0;
// components
const GenerateRows = (props) => {
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
            {props.page.rows.map((row) => (
                <View style={generateStyle(row)} key={row.id}>
                    {row.columns.map((col) => (
                        <GenerateColumns column={col} studentData={props.studentData} key={col.id}/>
                    ))}
                </View>
            ))}
        </>
    )
}

const GenerateColumns = (props) => {
    const generateStyle = (column) => {
        return(
            {
                width: column.width
            }
        )
    }

    return (
        <View style={generateStyle(props.column)}>
            {props.column.sections.map((section) => (
                <GenerateSection sectionDetails={section} studentData={props.studentData} key={section.id} />
            ))}
        </View>
    )
}

const GenerateSection = (props) => {
    const styles = StyleSheet.create({
        section:{
            //minHeight: props.sectionDetails.minHeight,
            minWidth: props.sectionDetails.minWidth,
            padding: props.sectionDetails.padding ? props.sectionDetails.padding : '0.2cm 0.5cm',
            fontSize:"11px"
        }
    });

    const loadComponent = (sectionDetail,studentData) => {
        switch (sectionDetail.sectionName){
            case 'personal-details':
                return <Header studentData={studentData} />
            
            case 'objective':
                return <Objective studentData={studentData} />
                
            case 'project':
                return <Projects studentData={studentData} />
                
            case 'education':
                return <Education studentData={studentData} />
                
            case 'certification':
                return <Certificates studentData={studentData} />
                break;
            case 'skills':
                return <Skills studentData={studentData} />
            case 'language':
                return <Language studentData={studentData} />
            default:
                return console.log("Hello");
        }
    }

    return (
        <View style={styles.section}>
            {loadComponent(props.sectionDetails, props.studentData)}
        </View>
    )
}

export default function Basic(props) {

    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#FFF',
            padding: '1cm',
            flexDirection: 'column',
            fontFamily: props.studentData.student.selectedFontFamily || 'Roboto'
        },
    });

    return (
        <Document title={props.studentData.student.firstName + ' ' + props.studentData.student.lastName} author="Fineprint CV Builder">
            {TemplateStructure.pages.map((page)=>(
                <Page size="A4" style={styles.page} key={page.id} style={{minHeight:"100vh",minWidth:"100vw"}}>
                    <GenerateRows page={page} studentData={props.studentData}/>
                </Page>
            ))}
            {
                props.studentData.paidUser
                ? null
                : <View>
                    <Text style={{position: 'absolute', bottom: 0, right: 0, fontSize: '8px', marginRight: '7px', marginBottom: '4px'}}>Powered By : placements.fineprint.legal</Text>
                </View>
            }
        </Document>
    )
}