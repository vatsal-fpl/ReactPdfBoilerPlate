import React from "react";
import { Text, View } from "@react-pdf/renderer";

 function Education() {
    return(
        <View>
            <Text style={{padding:"5px", margin:"5px", backgroundColor: "grey",fontSize: 22,fontWeight: "ultrabold"}}>EDUCATION</Text>
            <Text style={{padding:"0px", margin:"5px"}}>
                2022- B.E- Gujarat Technological University
            </Text>
            <Text style={{padding:"0px", margin:"5px"}}>
                2016-2018- H.S.C- Gujarat Board
            </Text>
            <Text style={{padding:"0px", margin:"5px"}}>
                2014-2016- S.S.C- Gujarat Board
            </Text>
        </View>
    );
}

export default Education;