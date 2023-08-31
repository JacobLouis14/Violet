import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function EventDetailsScreen() {

    const [eventData,setEventData] = useState([])
    //For Event Data
    useEffect(() => {
        axios.get("https://api.slingacademy.com/v1/sample-data/photos")
        .then(response=>{setEventData(response.data.photos[0])})
        .catch(err =>{console.log(err)})
      }, [])

  return (
    <View style={style.container}>
      <View style={style.eventData}>
            <Text>This is EventScreen</Text>
            <Image style={style.eventBanner} source={{uri: eventData.url}}/>
            <Text>{eventData.description}</Text>
      </View>
    </View>
  )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 100,
        paddingLeft: 10,
        paddingRight: 10,
    },
    eventData: {
        height: 250,
        width: '100%',
        borderRadius: 20,
    },
    eventBanner: {
        flex: 1,
        borderRadius: 20,
    }
})