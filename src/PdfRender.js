import React from 'react';
import {Document,Page,View,Text,StyleSheet} from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';



export default function PdfRendere() {

        return(
            
            <Document author="Vivek">
                <Page size="A5" orientation="portrait">
                   
                       
                    
                <View style={{padding: "5px",fontSize:"11px",margin:"5px"}} wrap={false}>
                  <Text style={{color: "#0984e3",borderBottom:"1px",paddingBottom:"5px",marginBottom: "5px",textTransform:"uppercase"}}>Work Experience</Text>
                  <Text style={{marginBottom: "5px"}}>Internship as Front-end developer(August 2018- December 2019)</Text>
                  <Text style={{marginBottom: "5px"}}>Technology: html,css,javascript</Text>
                  <Text style={{marginBottom: "5px"}}>Manhatten group</Text>
                </View>
                </Page>
                
            </Document>
          
            
       
    );
}
