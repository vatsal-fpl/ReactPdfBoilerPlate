import React from "react";
import {Page, Text, Document, StyleSheet, View} from '@react-pdf/renderer';
import Header from "./header";
import Objective from "./objective";
import Techsk from "./techskill";
import Education from "./education";
import Experience from "./exp";

const Styles = StyleSheet.create({
    section: { textAlign: 'justify', margin: 5}
});

const PDFfile = () => {
    return(
        <Document>
            <Page> 
                <>
                <View>
                <Header />
                <Objective />
                <Techsk />
                <Education />
                <Experience />
                </View>
                </>
            </Page>
        </Document>
    );
}

export default PDFfile;