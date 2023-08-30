import { View, Text, StatusBar, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View>
      <StatusBar/>
      <View style={style.container}>
        <TouchableOpacity activeOpacity={.6}>
          <Image style={style.locationIcon} source={require('../assets/Icons/location.png')}/>
        </TouchableOpacity>
        <Text style={style.locationText}>Location </Text>
        <TouchableOpacity activeOpacity={.6}>
          <Text style={style.locationChangeText}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const style = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        margin: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#3A6152', //#f6fef9
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    locationIcon: {
        width: 40,
        height: 40,
        marginLeft: 20,
    },
    locationText: {
        fontSize: 16,
        fontStyle: 'italic',
        maxWidth: 180,
    },
    locationChangeText: {
        marginRight: 20,
        fontSize: 16,
        fontWeight: 'bold',
    }
})