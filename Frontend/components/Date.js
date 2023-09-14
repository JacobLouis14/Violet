import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default function Day() {
  const rawDate = new Date().getDate();
  const rawMonth = new Date().getMonth() + 1;
  let month;
  let day;

  switch (rawMonth) {
    case 1:
      month = "Januvary";
      break;
    case 2:
      month = "Februvary";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
    default:
      break;
  }

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day = days[new Date().getDay()];

  return (
    <View style={style.container}>
      <Text style={style.text}>{day},</Text>
      <Text style={style.text}> {rawDate}</Text>
      <Text style={style.text}> {month}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: "500",
    color: "white",
  },
});
