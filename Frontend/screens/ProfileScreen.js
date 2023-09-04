import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View style={style.container}>
      <View style={style.detailsContainer}>
        <View style={style.ImageContainer}>
          <View style={style.imageHolder}>{/*Image goes Here */}</View>
        </View>
        <View style={style.menuContainer}>
          <View style={style.optionContainer}>
            <Text style={style.optionText}>Add Event</Text>
            <MaterialIcons name="add-circle" size={45} color="#362e5f" />
          </View>
          <View style={style.optionContainer}>
            <Text style={style.optionText}>Activity</Text>
            <AntDesign name="rightcircle" size={40} color="#362e5f" />
          </View>
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
    height: 163,
    width: 163,
    position: "absolute",
    top: -80,
    borderRadius: 500,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  imageHolder: {
    backgroundColor: "lightgrey",
    height: 150,
    width: 150,
    borderRadius: 500,
  },
  menuContainer: {
    marginTop: 100,
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
    height: 120,
    width: 180,
    alignItems: "center",
  },
  optionText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
