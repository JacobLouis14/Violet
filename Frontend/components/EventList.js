import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
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
        horizontal
        showsHorizontalScrollIndicator={false}
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
    paddingLeft: 10,
    marginTop: 25,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  eventContainer: {
    marginRight: 20,
    marginBottom: 10,
    width: 300,
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
    borderRadius: 10,
    height: 200,
    justifyContent: "flex-end",
  },
  eventDetails: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 8,
    height: "40%",
    flexWrap: "wrap",
  },
  details: {
    fontWeight: "bold",
    padding: 8,
    fontSize: 20,
  },
  shadowFill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
    opacity: 0.3,
  },
});
