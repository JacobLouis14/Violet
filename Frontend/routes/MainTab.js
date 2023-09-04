import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";

const Tab = createMaterialBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={{
        backgroundColor: "lightgrey",
        borderRadius: 20,
        overflow: "hidden",
        alignSelf: "center",
        marginBottom: 10,
        position: "absolute",
        left: 100,
        right: 100,
        paddingBottom: 2,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: (tabinfo) => (
            <AntDesign
              name="home"
              size={tabinfo.focused ? 30 : 25}
              color={tabinfo.focused ? "#362e5f" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          tabBarIcon: (profileInfo) => (
            <FontAwesome5
              name="user-circle"
              size={profileInfo.focused ? 30 : 25}
              color={profileInfo.focused ? "#362e5f" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
