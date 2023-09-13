import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
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
        renderItem={({ item }) => (
          <View>
            <Pressable
              activeOpacity={0.9}
              onPress={() => listTouchHandler()}
              style={style.eventContainer}
            >
              <Image style={style.eventImage} source={{ uri: item.url }} />
              <View style={style.eventDetails}>
                <Text style={style.details}>{item.title}</Text>
                <View style={style.dateContainer}>
                  <Text style={style.dateText}>30</Text>
                  <Text style={style.dateText}>Nov</Text>
                </View>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginHorizontal: "3%",
  },
  heading: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
    marginBottom: "5%",
  },
  eventContainer: {
    flexDirection: "row",
    marginBottom: "5%",
    paddingHorizontal: "1%",
    paddingVertical: "2%",
    backgroundColor: "rgba(197, 225, 165, 0.3)",
    borderRadius: 10,
  },
  eventImage: {
    height: responsiveHeight(18),
    width: responsiveWidth(35),
    resizeMode: "cover",
    borderRadius: 20,
  },
  eventDetails: {
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: "2%",
    flexDirection: "column",
    marginLeft: "1%",
  },
  details: {
    fontSize: responsiveFontSize(1.8),
  },

  dateContainer: {
    backgroundColor: "#8BC34A",
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "2%",
    right: "5%",
  },
  dateText: {
    fontSize: responsiveFontSize(1.8),
    color: "#757575",
    fontWeight: "500",
  },
});
