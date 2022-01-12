import React from "react";
import ReactDOM  from "react-dom";
import {Text, StyleSheet, View} from '@react-pdf/renderer';

const Styles = StyleSheet.create({
    section: { textAlign: 'justify', margin: 5, borderBottom: '2', fontSize: 26, backgroundColor: 'pink'}
});

function Header () {
    return( 
        <View>
            <Text style={Styles.section}>
                Moxa Parekh
            </Text>
            <Text style={{textAlign: 'justify', margin: 5, padding: 0, fontSize: 10}}>
                Email : parekhmoxa23@gmail.com{"\n"}
                Contact No : 7069938365
            </Text>
        </View>
        
               
    );
}

export default Header;