import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import {connect } from "react-redux";
import {loginEmailAccount} from "../Redux/Actions/authAction"

 class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  handleOnSubmit =() => {
    e.priventDefault();
    this.props.loginEmailAccount(this.state.email, this.state.password);
  };
  render() {
    const {navigation,auth}=this.props
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.Image}
            source={require("../Components/images/gps.png")}
          />
        </View>
        <View style={styles.LoginHeaderContainer}>
          <Text style={styles.LoginHeader}>Log in</Text>
        </View>
        <View>
        {auth.error.login && (
            <Text style={{ color: "red" }}>{auth.error.login}</Text>
          )}
          <TextInput
            placeholderTextColor="black"
            placeholder="Username"
            value={this.state.email}
            onChangeText={(text) => this.handleUpdateState("email", text)}
            style={styles.input}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="Password"
            value={this.state.password}
            onChangeText={(text) => this.handleUpdateState("password", text)}
            secureTextEntry={true}
            style={styles.input}
          />
          <Text style={styles.ForgotPassword}>Forgot Password</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonContainer}
          onPress={this.handleOnSubmit}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.noaccount}>
          <Text style={styles.noaccountText}>Don't have account?</Text>
          <TouchableOpacity onPress={()=>{
            navigation.navigate("Register")
            }}
          >
             <Text style={styles.SignupText}> Sign up</Text>
          </TouchableOpacity>
         
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 5,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#2c4ddb",
    fontSize: 20,
    marginVertical: 15,
  },
  LoginHeaderContainer: {
    marginBottom: 30,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  LoginHeader: {
    fontSize: 50,
    color: "#5082d9",
    fontWeight: "bold",
    height: 70,
  },
  ForgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 3,
    color: "#2c8cdb",
  },
  buttonContainer: {
    height: 50,
    backgroundColor: "#5082d9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
  noaccount: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noaccountText: {
    marginRight: 6,
    fontSize: 16,
  },
  SignupText: {
    marginRight: 10,
    fontSize: 16,
    color: "#5082d9",
  },
  Image: {
    //backgroundColor:"black",
    width: 220,
    height: 290,
    marginVertical: 4,
    alignSelf: "center",
    borderRadius: 10,
  },
  imageContainer: {
    marginTop: 50,
    // width:"100%",
    // height:"50%"
  },
});
const mapDispatchToProps = (state) => {
    return { auth: state };
  };

export default connect(mapDispatchToProps,{loginEmailAccount})(LoginScreen);