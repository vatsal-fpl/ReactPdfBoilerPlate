import React from 'react'
import{ Page, Text, Document } from '@react-pdf/renderer'
import Header from './header';
import Objective from './objective';
import Education from './education';
import Skills from './skills';
import Experience from './experience';



const PDFFile = () => {
    return(
        <Document>
            <Page>
            <>
             <Header />
             <Objective />
             <Education />
             <Skills />
             <Experience />
            </>
            </Page>
        </Document>
    );
}

export default PDFFile;