import React from "react";
import ReactDOM  from "react-dom";
import {Text, StyleSheet, View} from '@react-pdf/renderer';

const Styles = StyleSheet.create({
    section: { textAlign: 'left', margin: 5, backgroundColor: 'lightblue', borderBottom: 2}
});

function Objective () {
    return( 
        <View>
            <Text style={Styles.section}>
                PROFESSIONAL SUMMARY
            </Text>
            <Text style={{fontSize: 12, margin: 5}}>
            A goal-oriented engineering fresher who is looking for a beginner role as a developer to enhance and explore my technical skills for the betterment of the organization.
            </Text>
        </View>      
    );
}

export default Objective;