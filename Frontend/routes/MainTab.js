import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import SignupScreen from "../screens/SignupScreen";
import { responsiveHeight } from "react-native-responsive-dimensions";

const Tab = createMaterialBottomTabNavigator();

export default function MainTab() {
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
