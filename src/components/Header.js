import React from 'react'
import {View,Text,Link,StyleSheet} from '@react-pdf/renderer';

export const Styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding:"5px"
   
  },
  header:{
      marginBottom:"5px",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      padding: "5px",
      backgroundColor:"#ffeaa7"
      
  },
  section: {
    backgroundColor:"#fdcb6e",
    borderBottom: "1px solid #000",
    padding:"5px",
    margin: "5px",
    color: "#0984e3",
    textTransform:"uppercase",
    fontSize:".6cm"
  },skill:{
    display:"flex",
    flexDirection:"row",
    padding: "5px",
    fontSize:"13px",
    maxWidth:"900px",
    col:{
      marginRight: "12px",
      backgroundColor:"#fab1a0",
      padding: "20px",
      flexBasis:"35%",
      
    },
    items:{
       paddingBottom: "0.2cm"
    }
  }
});




export default function header(props) {
    return(
        <>
            <View style={Styles.header}>
                <Text style={{fontSize:"25px",alignSelf:"center"}}>{props.studentData.student.firstName} {props.studentData.student.lastName}</Text>
                {props.studentData.socialNetwork.map((social)=>{
                 return(<Link src={social.profileLink} key={social.id}>{social.networkName}</Link>);
                  
                })}
            <View style={{fontSize:"11px",marginBottom: "5px"}}>
                <Text>{props.studentData.student.contactNumber}</Text>
                <Text>{props.studentData.student.email}</Text>
            </View>   
            </View>
          </>  
    )
}