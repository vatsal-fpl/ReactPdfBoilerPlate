import React from "react";
import ReactDOM  from "react-dom";
import {Text, StyleSheet, View} from '@react-pdf/renderer';

const Styles = StyleSheet.create({
    section: { textAlign: 'left', margin: 5, backgroundColor: 'lightblue', borderBottom: 2}
});

function Experience () {
    return( 
        <View>
            <Text style={Styles.section}>
                EXPERIENCE
            </Text>
            <Text style={{fontSize: 12, margin: 5}}>
                - Summer Internship - Web development {"\n"}
                CreArt Solutions OPC PVT LTD{"\n"}
                - Personal Project{"\n"}
                Implemented mini project on "Library Management System" with fromtend technologies - Html, css, bootstrap, and basics of Php.{"\n"}
            </Text>
        </View>      
    );
}

export default Experience;