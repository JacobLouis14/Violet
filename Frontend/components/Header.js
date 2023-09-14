import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import Day from "./Date";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import * as Location from "expo-location";
import axios from "axios";

export default function Header() {
  /* For search function */
  const [searchValue, setSearchValue] = useState("");

  /* For Location */
  const [location, setLocation] = useState("Location");
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Enable Location");
        return;
      }

      try {
        let currentCoords = await Location.getCurrentPositionAsync({});
        axios
          .get(
            ` https://geocode.maps.co/reverse?lat=${currentCoords.coords.latitude}&lon=${currentCoords.coords.longitude}`
          )
          .then((response) => {
            setLocation(response.data.address.suburb);
          })
          .catch((err) => console.err);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <SafeAreaView>
      <View style={style.container}>
        <View style={style.topContainer}>
          <View style={style.loactionContainer}>
            <TouchableOpacity activeOpacity={0.6}>
              <MaterialIcons
                style={style.locationIcon}
                name="location-pin"
                size={responsiveFontSize(5)}
              />
            </TouchableOpacity>
            <Text style={style.locationText}>{location}</Text>
          </View>
          <View style={style.headerDiv}>
            <Day />
          </View>
        </View>
        <View style={style.searchBoxContainer}>
          <EvilIcons
            name="search"
            size={responsiveFontSize(4)}
            color="#362e5f"
          />
          <TextInput
            style={style.searchBox}
            placeholder="Search"
            placeholderTextColor="#757575"
            value={searchValue}
            onChangeText={setSearchValue}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  topContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  loactionContainer: {
    flexDirection: "row",
    marginBottom: "4%",
  },
  locationIcon: {
    color: "white",
  },
  locationText: {
    fontSize: responsiveFontSize(2),
    fontStyle: "italic",
    maxWidth: 180,
    color: "white",
    fontWeight: "500",
  },
  searchBoxContainer: {
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 5,
    marginBottom: 10,
    overflow: "hidden",
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    height: responsiveHeight(6),
  },
  searchBox: {
    paddingLeft: 5,
    paddingVertical: 10,
    fontSize: responsiveFontSize(2),
    fontWeight: "500",
    width: "100%",
  },
  headerDiv: {
    marginRight: "2%",
  },
});
