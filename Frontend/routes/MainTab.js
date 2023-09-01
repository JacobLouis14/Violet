import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {AntDesign } from '@expo/vector-icons'

import HomeStack from "./HomeStack";


const Tab = createMaterialBottomTabNavigator();


export default function MainTab(){
    return(
        <Tab.Navigator 
        barStyle={{
            backgroundColor: 'darkgreen', 
            borderRadius: 25, 
            overflow: 'hidden',
            height: 50,
            alignSelf: 'center',
            marginBottom: 20,
            position: 'absolute',
            left: 100,
            right: 100,
            }}>
            <Tab.Screen name="Home" component={HomeStack} options={{
                tabBarIcon: (tabinfo)=>( 
                    <AntDesign name="home" size={tabinfo.focused? 26 : 20} color= 'black' />
                ),
            }} />
        </Tab.Navigator>
    )
}

