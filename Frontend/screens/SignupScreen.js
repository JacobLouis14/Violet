import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Formik } from "formik";

export default function SignupScreen() {
  const [signUpCredential, setSignupCredential] = useState("");
  const [loginCredential, setLoginCredential] = useState("");
  const [isSignup, setIsSignup] = useState(true);

  /* State Handler for Signup/Signin */
  const stateHandlerSignup = () => {
    setIsSignup(false);
  };
  const stateHandlerLogin = () => {
    setIsSignup(true);
  };

  return (
    <View style={style.container}>
      {/* SignUp Section */}
      {isSignup ? (
        <View style={style.signupContainer}>
          <View style={style.headingContainer}>
            <Text style={style.heading}>Signup</Text>
          </View>
          <Formik
            enableReinitialize
            initialValues={{
              Name: "",
              MobileNo: "",
              Email: "",
              Password: "",
            }}
            onSubmit={(values) => {
              setSignupCredential(values);
              console.log(values);
            }}
          >
            {(props) => (
              <View style={style.contentContainer}>
                <Text style={style.inputInfo}>Name</Text>
                <TextInput
                  placeholder="Name"
                  placeholderTextColor={"lightgrey"}
                  style={style.textInput}
                  onChangeText={props.handleChange("Name")}
                  value={props.values.Name}
                />
                <Text style={style.inputInfo}>Mobile No</Text>
                <TextInput
                  placeholder="Mobile No"
                  placeholderTextColor={"lightgrey"}
                  keyboardType="numeric"
                  style={style.textInput}
                  onChangeText={props.handleChange("MobileNo")}
                  value={props.values.MobileNo}
                />
                <Text style={style.inputInfo}>Email</Text>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={"lightgrey"}
                  style={style.textInput}
                  onChangeText={props.handleChange("Email")}
                  value={props.values.Email}
                />
                <Text style={style.inputInfo}>Password</Text>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={"lightgrey"}
                  style={style.textInput}
                  onChangeText={props.handleChange("Password")}
                  value={props.values.Password}
                />
                <View style={style.btnContainer}>
                  <Text style={style.stateBtn} onPress={stateHandlerSignup}>
                    Login
                  </Text>
                  <Text style={style.submit} onPress={props.handleSubmit}>
                    Signup
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      ) : (
        //Login Container
        <View style={style.signupContainer}>
          <View style={style.headingContainer}>
            <Text style={style.heading}>Login</Text>
          </View>
          <Formik
            enableReinitialize
            initialValues={{ Email: "", Password: "" }}
            onSubmit={(value) => {
              setLoginCredential(value);
              console.log(value);
            }}
          >
            {(props) => (
              <View style={style.contentContainer}>
                <Text style={style.inputInfo}>Email</Text>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={"lightgrey"}
                  style={style.textInput}
                  onChangeText={props.handleChange("Email")}
                  value={props.values.Email}
                />
                <Text style={style.inputInfo}>Password</Text>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={"lightgrey"}
                  style={style.textInput}
                  onChangeText={props.handleChange("Password")}
                  value={props.values.Password}
                />
                <View style={style.btnContainer}>
                  <Text style={style.stateBtn} onPress={stateHandlerLogin}>
                    Signup
                  </Text>
                  <Text style={style.submit} onPress={props.handleSubmit}>
                    Login
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signupContainer: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: responsiveWidth(80),
    backgroundColor: "#E5F2EA",
    elevation: 5,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  headingContainer: {
    marginBottom: 10,
    flexDirection: "row",
  },
  heading: {
    fontSize: responsiveFontSize(5),
    fontWeight: "bold",
  },
  contentContainer: {
    marginVertical: 20,
    width: "100%",
  },
  textInput: {
    backgroundColor: "white",
    outlineStyle: "none",
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: responsiveFontSize(2),
  },
  inputInfo: {
    fontSize: responsiveFontSize(2),
    fontWeight: "500",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  submit: {
    marginTop: 10,
    fontSize: responsiveFontSize(2.6),
    fontWeight: "bold",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#76b78c",
    borderRadius: 15,
  },
  stateBtn: {
    marginTop: 10,
    fontSize: responsiveFontSize(2.6),
    fontWeight: "bold",
    color: "#76b78c",
  },
});
