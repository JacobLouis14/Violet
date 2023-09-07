import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";

const Tab = createMaterialBottomTabNavigator();

export default function MainTab() {
  const user = useSelector((state) => state.user.userValue);

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
        left: "10%",
        right: "10%",
        paddingBottom: 10,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: (tabinfo) => (
            <AntDesign
              name="home"
              size={35}
              color={tabinfo.focused ? "#362e5f" : "black"}
            />
          ),
        }}
      />
      {user && (
        <Tab.Screen
          name="ProfileTab"
          component={ProfileStack}
          options={{
            tabBarIcon: (profileInfo) => (
              <FontAwesome5
                name="user-circle"
                size={35}
                color={profileInfo.focused ? "#362e5f" : "black"}
              />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}
