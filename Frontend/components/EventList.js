import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
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
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => listTouchHandler()}
          >
            <View style={style.eventContainer}>
              <Image style={style.eventImage} source={{ uri: item.url }} />
              <View style={style.eventDetails}>
                <Text style={style.details}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "500",
  },
  eventContainer: {
    marginRight: 10,
    marginBottom: 10,
    maxWidth: 130,
    marginTop: 20,
  },
  eventImage: {
    height: 170,
    width: 120,
    resizeMode: "cover",
    borderRadius: 10,
  },
  eventDetails: {
    // backgroundColor: "lightgrey",
    borderRadius: 10,
    marginTop: 10,
  },
  details: {
    fontWeight: "600",
    padding: 8,
  },
});
