import React from 'react';
import {Document,Page,View,Text,StyleSheet,Image} from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
     
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,

    },
    image:{
        height: "200px",
        width: "200px"
    }
  });



export default function PdfRendere() {

        return(
            <PDFViewer style={{minHeight: "100vh", minWidth: "100vw"}}>
            <Document author="Vivek" style={styles.page}>
                <Page size="A4" orientation="portrait">
                    <View>
                        <Text>Vivek Modi</Text>
                        <Image
                        style={styles.image}
                        src="/img/img1.jpeg"/>
                    </View>
                    
                    <View>
                      <Text>Demo</Text>
                    </View>
                </Page>
                
            </Document>
            
        </PDFViewer>
    );
}
