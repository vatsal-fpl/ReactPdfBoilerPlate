import React from "react";
import ReactDOM  from "react-dom";
import {Text, StyleSheet, View} from '@react-pdf/renderer';

const Styles = StyleSheet.create({
    section: { textAlign: 'left', margin: 5, backgroundColor: 'lightblue', borderBottom: 2}
});

function Techsk () {
    return( 
        <View>
            <Text style={Styles.section}>
                TECHNICAL SKILLS
            </Text>
            <Text style={{fontSize: 12, margin: 5}}>
                - Programming Languages - Java, Python{"\n"}
                - Web development with front-end technologies - Htnl, css, js and React.js{"\n"}
                - OOPs Concepts{"\n"}
                - Fundamentals of Operating systems{"\n"}
                - Databases{"\n"}
            </Text>
        </View>      
    );
}

export default Techsk;