import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

import { login } from "../Redux/User/user";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import SignupScreen from "../screens/SignupScreen";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const Tab = createBottomTabNavigator();

export default function MainTab() {
  /* Looking For User */
  const dispatch = useDispatch();
  useEffect(() => {
    const validateUser = async () => {
      const userToken = await AsyncStorage.getItem("userToken");

      if (userToken) {
        axios
          .post(
            "http://192.168.0.106:3001/users/profile/getprofile",
            {},
            {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            }
          )
          .then((response) => {
            dispatch(login(response.data.userData));
          })
          .catch((err) => console.log(err));
      }
    };
    validateUser();
  }, []);

  /*Accesing user State */
  const user = useSelector((state) => state.user.userValue);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: responsiveFontSize(7),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: "hidden",
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: (tabinfo) => (
            <MaterialCommunityIcons
              name="home-circle"
              color={tabinfo.focused ? "green" : "grey"}
              size={
                tabinfo.focused ? responsiveFontSize(5) : responsiveFontSize(4)
              }
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
              color={profileInfo.focused ? "green" : "#244b1d"}
              size={
                profileInfo.focused
                  ? responsiveFontSize(5)
                  : responsiveFontSize(4)
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
