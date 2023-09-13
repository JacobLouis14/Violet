import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EventList({ navigation }) {
  const [imageUrl, setImageUrl] = useState();

  /*Accesing Event List */
  useEffect(() => {
    axios
      .get("https://api.slingacademy.com/v1/sample-data/photos")
      .then((response) => {
        setImageUrl(response.data.photos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // function to navigate to eventScreen
  const listTouchHandler = () => {
    navigation.navigate("EventDetails");
  };

  return (
    <View style={style.container}>
      <Text style={style.heading}>Popular Events Nearby</Text>
      <FlatList
        data={imageUrl}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={style.eventContainer}>
            <Pressable activeOpacity={0.9} onPress={() => listTouchHandler()}>
              <ImageBackground
                style={style.eventImage}
                source={{ uri: item.url }}
              >
                <View style={style.shadowFill}></View>
                <View style={style.eventDetails}>
                  <Text style={style.details}>{item.title}</Text>
                  <View style={style.dateContainer}>
                    <Text style={style.dateText}>30</Text>
                    <Text style={style.dateText}>Nov</Text>
                  </View>
                </View>
              </ImageBackground>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    // paddingLeft: 10,
    // paddingRight: 10,
    marginHorizontal: 10,
  },
  heading: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
  },
  eventContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 10,
    marginTop: 20,
    elevation: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  eventImage: {
    height: responsiveHeight(20),
    justifyContent: "flex-end",
  },
  eventDetails: {
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 8,
    marginBottom: 5,
    height: responsiveHeight(8),
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  details: {
    fontSize: responsiveFontSize(1.5),
    // maxWidth: responsiveWidth(20),
    marginRight: "30%",
  },
  shadowFill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
    opacity: 0.3,
  },
  dateContainer: {
    backgroundColor: "#45865b",
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  dateText: {
    fontSize: responsiveFontSize(1),
    color: "white",
  },
});
