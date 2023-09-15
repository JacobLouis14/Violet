import { View, Text, StyleSheet, TextInput, } from "react-native";
import React, { useState } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Formik } from "formik";
import * as yup from "yup";
import axios from 'axios'
import {useDispatch} from 'react-redux'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../Redux/User/user";

/* Signup validation */
const reviewSchemaSignup = yup.object({
  Name: yup
    .string()
    .required()
    .min(3)
    .matches(/[a-zA-Z]/, "Only contain letters"),
  MobileNo: yup.number().required().min(10),
  Email: yup.string().required().email(),
  Password: yup.string().required().min(6),
});

/*Login Validation */
const reviewSchemaLogin = yup.object({
  Email: yup.string().required().email(),
  Password: yup.string().required().min(6),
});

export default function SignupScreen({navigation}) {
  const [isSignup, setIsSignup] = useState(true);

  /* State Handler for Signup/Signin */
  const stateHandlerSignup = () => {
    setIsSignup(false);
  };
  const stateHandlerLogin = () => {
    setIsSignup(true);
  };

  /* Signup Handler */
  const signUpHandler = (values)=>{
    console.log(values)
    axios.post("http://192.168.0.106:3001/users/auth/register",values)
    .then(response=>console.log(response.data))
    .catch(err=>console.log(err))
  }

  /* Login Handler */
  const dispatch = useDispatch();
  const loginHandler= (values)=>{
    axios.post("http://192.168.0.106:3001/users/auth/login", values)
    .then(response=>{console.log(response),
          dispatch(login(response.data.user)),
          AsyncStorage.setItem('userToken',response.data.token),
          navigation.navigate('HomeTab')})
    .catch(err=>console.log(err))
  }

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
            validationSchema={reviewSchemaSignup}
            initialValues={{
              Name: "",
              MobileNo: "",
              Email: "",
              Password: "",
            }}
            onSubmit={(values,{resetForm}) => {
              signUpHandler(values)
              resetForm({values: ''})
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
                <Text>
                  {props.values.Name &&
                    props.errors.Name &&
                    `${props.errors.Name}❗`}
                </Text>
                <Text style={style.inputInfo}>Mobile No</Text>
                <TextInput
                  placeholder="Mobile No"
                  placeholderTextColor={"lightgrey"}
                  keyboardType="numeric"
                  style={style.textInput}
                  onChangeText={props.handleChange("MobileNo")}
                  value={props.values.MobileNo}
                />
                <Text>
                  {props.values.MobileNo &&
                    props.errors.MobileNo &&
                    `${props.errors.MobileNo}❗`}
                </Text>
                <Text style={style.inputInfo}>Email</Text>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={"lightgrey"}
                  style={style.textInput}
                  onChangeText={props.handleChange("Email")}
                  value={props.values.Email}
                />
                <Text>
                  {props.values.Email &&
                    props.errors.Email &&
                    `${props.errors.Email}❗`}
                </Text>
                <Text style={style.inputInfo}>Password</Text>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={"lightgrey"}
                  style={style.textInput}
                  onChangeText={props.handleChange("Password")}
                  value={props.values.Password}
                />
                <Text>
                  {props.values.Password &&
                    props.errors.Password &&
                    `${props.errors.Password}❗`}
                </Text>
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
        <View style={style.loginWrapper}>
          <View style={style.loginContainer}>
            <View style={style.headingContainer}>
              <Text style={style.heading}>Wecome Back</Text>
            </View>
            <Formik
              enableReinitialize
              validationSchema={reviewSchemaLogin}
              initialValues={{ Email: "", Password: "" }}
              onSubmit={(value,{resetForm}) => {
                loginHandler(value)
                resetForm({value: ''})
              }}
            >
              {(props) => (
                <View style={style.contentContainer}>
                  <Text style={style.inputInfo}>Email</Text>
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor={"lightgrey"}
                    style={[
                      style.textInput,
                      { borderWidth: 1, borderColor: "#8BC34A" },
                    ]}
                    onChangeText={props.handleChange("Email")}
                    value={props.values.Email}
                  />
                  <Text>
                    {props.values.Email &&
                      props.errors.Email &&
                      `${props.errors.Email}❗`}
                  </Text>
                  <Text style={style.inputInfo}>Password</Text>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={"lightgrey"}
                    style={[
                      style.textInput,
                      { borderWidth: 1, borderColor: "#8BC34A" },
                    ]}
                    onChangeText={props.handleChange("Password")}
                    value={props.values.Password}
                  />
                  <Text>
                    {props.values.Password &&
                      props.errors.Password &&
                      `${props.errors.Password}❗`}
                  </Text>
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
    backgroundColor: "#C5E1A5",
    elevation: 5,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  loginWrapper: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#C5E1A5",
  },
  loginContainer: {
    flex: 1,
    width: "100%",
    marginTop: "80%",
    alignItems: "center",
    paddingVertical: "5%",
    paddingHorizontal: "15%",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    backgroundColor: "white",
  },
  headingContainer: {
    flexDirection: "row",
  },
  heading: {
    fontSize: responsiveFontSize(3),
    fontWeight: "700",
  },
  contentContainer: {
    marginVertical: "10%",
    width: "100%",
  },
  textInput: {
    backgroundColor: "white",
    marginTop: "3%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: responsiveFontSize(2),
  },
  inputInfo: {
    marginTop: "8%",
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
    backgroundColor: "#8BC34A",
    borderRadius: 15,
  },
  stateBtn: {
    marginTop: 10,
    fontSize: responsiveFontSize(2.6),
    fontWeight: "bold",
    color: "#4CAF50",
  },
});
