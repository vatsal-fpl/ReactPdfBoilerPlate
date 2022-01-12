import React from "react";
import { Text, View } from "@react-pdf/renderer";


 function Header() {
    return(
        <View>
            <Text style={{padding:"5px", margin:"5px", backgroundColor: "grey",fontSize: 30,fontWeight: "ultrabold"}}> Akanksha Chavda </Text>
            <Text style={{padding:"0px", margin:"5px"}}>E-mail: chavdaakanksha7@gmail.com</Text>
            <Text style={{padding:"0px", margin:"5px"}}>Contact no: 9723658914</Text>
        </View>
    );
}

export default Header;