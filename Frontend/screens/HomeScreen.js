import { ScrollView, StyleSheet, View, ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import EventList from "../components/EventList";
import Categories from "../components/Categories";
import Banner from "../components/Banner";

export default function HomeScreen({ navigation }) {
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    let n = Math.floor(Math.random() * 10);
    axios
      .get("https://api.slingacademy.com/v1/sample-data/photos")
      .then((response) => {
        setImageUrl(response.data.photos[n].url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
      <View style={style.headerContainer}>
        <ImageBackground
          source={{ uri: imageUrl }}
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <View style={style.overly}></View>
          <Header />
        </ImageBackground>
      </View>
      {/* Content Starting */}
      <View style={style.contentContainer}>
        <View style={style.contentBanner}>
          <Banner />
        </View>
        <EventList navigation={navigation} />
        <Categories />
        <EventList navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  headerContainer: {
    backgroundColor: "#362e5f",
    height: 350,
    overflow: "hidden",
  },
  contentContainer: {
    backgroundColor: "#F5F5F5",
  },
  contentBanner: {
    position: "relative",
    top: -90,
    width: "100%",
    alignSelf: "center",
  },
  ImageContainer: {
    backgroundColor: "rgba(54, 46, 95, 0.2)",
    flex: 1,
  },
  overly: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(54, 46, 95, 0.4)",
  },
});
