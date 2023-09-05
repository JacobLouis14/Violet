import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Shows",
    },
    {
      id: 2,
      name: "Dating",
    },
    {
      id: 3,
      name: "Automobile",
    },
    {
      id: 4,
      name: "Festivals",
    },
  ];

  return (
    <View style={style.container}>
      <Text style={style.heading}>Pick The Choice !</Text>
      <View style={style.inline}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={(obj) => (
            <TouchableOpacity activeOpacity={0.9}>
              <Text style={style.categoriesText}>{obj.item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingLeft: 10,
  },
  inline: {
    flexDirection: "row",
    marginTop: 15,
    borderRadius: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
  },
  categoriesText: {
    flex: 1,
    padding: 10,
    fontWeight: "800",
    fontSize: 20,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: "#362e5f",
    textAlign: "center",
    color: "white",
  },
});
