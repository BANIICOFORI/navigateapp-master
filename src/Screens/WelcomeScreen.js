import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
//import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen =()=>{
    const navigation = useNavigation();
  return (
    <SafeAreaView  style={{backgroundColor:"white",flex:1}}>
        <View style={Styles.Container1}>
            <Text 
               // className="text-white font-bold text-4xl text-center"
               style={Styles.LetstartText}
                >
                Let's Get Started!
            </Text>
            <View style={Styles.Image}
            //className="flex-row justify-center"
            >
                <Image source={require("../Components/images/gps.png")}
                    style={{width: 350, height: 440}}
                    //
                    />
            </View>
            <View className="space-y-4">
                <TouchableOpacity style={Styles.buttonContainer}
                    onPress={()=> navigation.navigate('Register')}
                    className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text style={Styles.buttonText}
                            className="text-xl font-bold text-center text-gray-700"
                        >
                            Sign Up
                        </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center"style={Styles.noaccount}>
                    <Text className="text-white font-semibold"style={Styles.noaccountText}>Already have an account?</Text>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('Login')}
                    >
                        <Text className="font-semibold text-yellow-400" style={Styles.SignupText}> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}
export default WelcomeScreen;

const Styles = StyleSheet.create({
    Container:{
      marginTop:100,
      justifyContent:"center",
      alignItems:"center",
      marginHorizontal:50,
      backgroundColor:"#4b67d6",
      height:50,
    },
    Container1:{
        justifyContent:"space-around",
        flex:-1,

       
      },
      LetstartText:{
    // backgroundColor:"#131b54", 
     width:380,
     height:70,
      color:"#131b54",
      //justifyContent:"center",
     // alignItems:"center",
      alignSelf:"center",
      fontWeight:"bold",
      fontSize:30,
      textAlign:"center",
      marginTop:40,
    },
    Image:{
    marginTop:20,
    flexDirection:"row",
    justifyContent:"center",
      alignItems:"center",
        marginHorizontal:2,
       //width: 250, 
       //height: 250,
    },
    buttonContainer: {
        height:70,
        width:310,
        backgroundColor:"#5082d9",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10,
       marginTop:20,
       alignSelf:"center"
        //marginHorizontal:20,
      },
      buttonText:{
        color: "white",
        fontSize:25,
        alignItems:"center"
      },
      noaccount:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"center"
      },
      noaccountText:{
        marginRight:6,
        fontSize:16,
      },
      SignupText:{
        marginRight:10,
        fontSize:16,
        color: "#5082d9"
      },
  })