import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import {useDispatch} from 'react-redux'
import AsyncronousStorage from '@react-native-async-storage/async-storage'

import {logout} from '../Redux/User/user'

export default function ProfileScreen({navigation}) {

  const dispatch = useDispatch()

  /*Logout Handler */
  const logoutHandler =()=>{
    dispatch(logout());
    AsyncronousStorage.removeItem('userToken');
    navigation.navigate('HomeTab')
  }

  return (
    <View style={style.container}>
      <View style={style.detailsContainer}>
        <View style={style.ImageContainer}>
          <View style={style.imageHolder}>{/*Image goes Here */}</View>
        </View>
        <View style={style.menuContainer}>
          <View style={style.optionContainer}>
            <Text style={style.optionText}>Add Event</Text>
            <MaterialIcons
              name="add-circle"
              size={responsiveFontSize(5)}
              color="#362e5f"
            />
          </View>
          <View style={style.optionContainer}>
            <Text style={style.optionText}>Activity</Text>
            <AntDesign
              name="rightcircle"
              size={responsiveFontSize(4.5)}
              color="#362e5f"
            />
          </View>
          <Pressable style={style.optionContainer} onPress={logoutHandler}>
            <Text style={style.optionText}>Logout</Text>
            <MaterialIcons name="logout" size={responsiveFontSize(4.5)} color="#362e5f" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#362e5f",
    flex: 1,
  },
  detailsContainer: {
    backgroundColor: "#F0F0F0",
    flex: 1,
    marginTop: 200,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  ImageContainer: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 3,
    minHeight: 140,
    minWidth: 140,
    position: "absolute",
    top: -80,
    borderRadius: 500,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  imageHolder: {
    backgroundColor: "lightgrey",
    minHeight: 130,
    minWidth: 130,
    borderRadius: 500,
  },
  menuContainer: {
    marginTop: "25%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  optionContainer: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 15,
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginLeft: 10,
    borderRadius: 10,
    minHeight: responsiveHeight(8),
    minWidth: responsiveWidth(25),
    alignItems: "center",
    flexWrap: "wrap",
  },
  optionText: {
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
    marginBottom: 20,
  },
});
