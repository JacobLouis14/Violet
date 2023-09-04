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
      <Image
        style={style.bannerImage}
        resizeMode="cover"
        source={{ uri: imageUrl }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    borderRadius: 30,
  },
  bannerImage: {
    height: 200,
    borderRadius: 30,
  },
});
