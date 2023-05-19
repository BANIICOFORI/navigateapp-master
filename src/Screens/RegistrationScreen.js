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
import { connect } from "react-redux";
import {
  createEmailAccount,
  registerError,
  auth,
} from "../Redux/Actions/authAction";
class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username:"",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  }
  handleOnSubmit = async (e) => {
   // e.priventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      this.props.registerError("Password do not match");
      return;
    }
    this.props.createEmailAccount(this.state.email, this.state.password);
  }
  render() {
    const { navigation, auth } = this.props;

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.Image}
            source={require("../Components/images/gps.png")}
          />
        </View>

        <View style={styles.LoginHeaderContainer}>
          <Text style={styles.LoginHeader}>Sign Up</Text>
        </View>
        <View>
          {auth.error.register && (
            <Text style={{ color: "red" }}>{auth.error.register}</Text>
          )}
          <TextInput
            placeholderTextColor="black"
            placeholder="Email"
            value={this.state.email}
            onChangeText={(text) => this.handleUpdateState("email", text)}
            //secureTextEntry={true}
            style={styles.input}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="Password"
            value={this.state.password}
            onChangeText={(text) => this.handleUpdateState("password", text)}
            // onChangeText={(password) => {
            //   console.log(password);
            //   this.setState({ password: password })
            // }}
            secureTextEntry={true}
            style={styles.input}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
            onChangeText={(text) =>
              this.handleUpdateState("confirmPassword", text)
            }
            // onChangeText={(confirmPassword) => {
            //   console.log(confirmPassword);
            //   this.setState({ confirmPassword: confirmPassword })
            // }}

            secureTextEntry={true}
            style={styles.input}
          />
          {/* <Text style={styles.ForgotPassword}>Forgot Password</Text> */}
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleOnSubmit}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.noaccount}>
          <Text style={styles.noaccountText}>already have account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.SignupText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 4,
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
    marginTop: 40,
    // width:"100%",
    // height:"50%"
  },
});

// const mapStateToProps =(state) =>{
// return {auth:state}
// }
// const  mapStateToProps = (state) => {
//     return {
//       auth:state
//     }
//   }
const mapDispatchToProps = (state) => {
  return { auth: state };
};

export default connect(mapDispatchToProps, {
  createEmailAccount,
  registerError,
})(RegistrationScreen);
