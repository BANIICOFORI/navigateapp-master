import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';
import {MaterialIcons,Feather,Entypo,MaterialCommunityIcons,SimpleLineIcons} from "@expo/vector-icons";
const contact = ({name,phone}) => {
    this.state
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require("../Components/images/profile.jpg")} />  
        <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text>{phone}</Text>
        </View>
        <View style={styles.icons}>
        <Feather name="phone" size={20} color="#1963e6" />
        </View>
        <View style={styles.icons}>
        <MaterialCommunityIcons name="message-processing" size={20} color="#1963e6" />
        </View>
        <View style={styles.icons}>
        <SimpleLineIcons name="options-vertical" size={20} color="#82878f" /> 
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
      marginHorizontal:20,
      alignItems:"center"
    //  marginVertical:5
    },
    Image: {
        width: 50,
         height:50,
         marginHorizontal:20, 
        marginVertical:4,
       // alignSelf: "",
        borderRadius: 50
      },
      infoContainer:{
        justifyContent:"center",
        marginHorizontal:15,
        flex:4
      },
      name:{
        fontWeight:"bold",
        fontSize:17
      },
      icons:{
        flex:1
      }
});
export default contact