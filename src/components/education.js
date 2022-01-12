import React from "react";
import ReactDOM  from "react-dom";
import {Text, StyleSheet, View} from '@react-pdf/renderer';

const Styles = StyleSheet.create({
    section: { textAlign: 'left', margin: 5, backgroundColor: 'lightblue', borderBottom: 2}
});

function Education () {
    return( 
        <View>
            <Text style={Styles.section}>
                EDUCATION
            </Text>
            <Text style={{fontSize: 12, margin: 5}}>
                - Bachelor of Engineering - CE {"\n"}
                (2018 - present){"\n"}
                - HSC - 82%{"\n"}
                (2018){"\n"}
                - SSC - 91%{"\n"}
                (2016){"\n"}
            </Text>
        </View>      
    );
}

export default Education;