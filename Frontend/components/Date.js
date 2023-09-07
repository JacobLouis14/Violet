import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Day() {
  const rawDate = new Date().getDate();
  const rawMonth = new Date().getMonth() + 1;
  const rawDay = new Date().getDay();
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

  switch (rawDay) {
    case 1:
      day = "Sunday";
      break;
    case 2:
      day = "Monday";
      break;
    case 3:
      day = "Tuesday";
      break;
    case 4:
      day = "Wenesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
      break;
    case 7:
      day = "Saturday";
      break;
    default:
      break;
  }

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
    fontSize: 15,
    fontWeight: "500",
  },
});
