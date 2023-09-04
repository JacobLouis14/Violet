import { View, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Banner() {
  /*For dummy Images */
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
    <View style={style.container}>
      <Image style={style.bannerImage} source={{ uri: imageUrl }} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginLeft: 3, //22
    marginRight: 3,
    elevation: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    borderRadius: 25,
  },
  bannerImage: {
    height: 200,
    borderRadius: 25,
  },
});
