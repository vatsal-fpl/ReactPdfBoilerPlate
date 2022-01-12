import React from "react";
import { Text, View } from "@react-pdf/renderer";


 function Experience() {
    return(
        <View>
            <Text style={{padding:"5px", margin:"5px", backgroundColor: "grey",fontSize: 22,fontWeight: "ultrabold"}}>EXPERIENCE</Text>
            <Text style={{padding:"0px", margin:"5px"}}>
                2 weeks internship of Web Development at CreArt Solutions Pvt. Ltd.
            </Text>
            <Text style={{padding:"0px", margin:"5px",fontWeight:"bold"}}>
                Project:
            </Text>
            <Text style={{padding:"0px", margin:"5px"}}>
                E-learning System: In this system, there are different Courses, Video lectures and Quiz section so that students can learn any course anytime.
            </Text>
        </View>
    );
}

export default Experience;