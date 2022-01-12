import React from "react";
import { Text, View } from "@react-pdf/renderer";


 function Skills() {
    return(
        <View>
             <Text style={{padding:"5px", margin:"5px", backgroundColor: "grey",fontSize: 22,fontWeight: "ultrabold"}}>SKILLS</Text>
             <Text style={{padding:"0px", margin:"5px"}}>
                HTML
            </Text>
            <Text style={{padding:"0px", margin:"5px"}}>
                CSS
            </Text>
            <Text style={{padding:"0px", margin:"5px"}}>
                Python
            </Text>
            <Text style={{padding:"0px", margin:"5px"}}>
               ReactJS
            </Text>
            
        </View>
    );
}

export default Skills;