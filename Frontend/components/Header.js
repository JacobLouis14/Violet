import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View>
      <View style={style.container}>
        <TouchableOpacity activeOpacity={0.6}>
          <MaterialIcons
            style={style.locationIcon}
            name="location-pin"
            size={40}
            color="black"
          />
        </TouchableOpacity>
        <Text style={style.locationText}>Location </Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={style.locationChangeText}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    borderRadius: 20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  locationIcon: {
    width: 40,
    height: 40,
    marginLeft: 20,
    color: "#362e5f",
  },
  locationText: {
    fontSize: 16,
    fontStyle: "italic",
    maxWidth: 180,
    color: "#362e5f",
  },
  locationChangeText: {
    marginRight: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#362e5f",
  },
});
