import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

import { login } from "../Redux/User/user";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import SignupScreen from "../screens/SignupScreen";

const Tab = createMaterialBottomTabNavigator();

export default function MainTab() {

    /* Looking For User */
    const dispatch = useDispatch()
    useEffect(() => {
      const validateUser = async()=>{
        const userToken = await AsyncStorage.getItem('userToken')
      
        if(userToken){
          axios.post("http://192.168.0.106:3001/users/profile/getprofile",{},
          {
            headers: {
              Authorization: `Bearer ${userToken}`
            }
          }).then(response=>{dispatch(login(response.data.userData))})
          .catch(err=>console.log(err))
        }
      }
      validateUser();
    }, [])


  /*Accesing user State */
  const user = useSelector((state) => state.user.userValue);

  return (
    <Tab.Navigator
      labeled={false}
      barStyle={{
        backgroundColor: "#4CAF50",
        borderRadius: 20,
        overflow: "hidden",
        alignSelf: "center",
        marginBottom: 10,
        position: "absolute",
        left: 60,
        right: 60,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: (tabinfo) => (
            <AntDesign
              name="home"
              size={25}
              color={tabinfo.focused ? "white" : "#757575"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={user ? ProfileStack : SignupScreen}
        options={{
          tabBarIcon: (profileInfo) => (
            <FontAwesome5
              name="user-circle"
              size={25}
              color={profileInfo.focused ? "white" : "#757575"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
