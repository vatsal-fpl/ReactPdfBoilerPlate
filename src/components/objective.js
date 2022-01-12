import React from "react";
import { Text, View } from "@react-pdf/renderer";


 function Objective() {
    return(
        <View>
            <Text style={{padding:"5px", margin:"5px", backgroundColor: "grey",fontSize: 22,fontWeight: "ultrabold"}}>OBJECTIVE</Text>
            <Text style={{padding:"0px", margin:"5px"}}>To be a part of an enthusiastic work environment, where I can use my technical skills to accomplish organizational goals.</Text>
        </View>
    );
}

export default Objective;