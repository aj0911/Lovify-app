import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { COLORS } from "../../utils/constants";
import { fsp, hp } from "../../utils/helper";

export default function TabLayout() {
  // Methods
  const getOptions = (tabBarLabel, activeIcon, inactiveIcon) => ({
    tabBarLabel,
    tabBarIcon: ({ focused, size }) => (
      <Ionicons
        name={focused ? activeIcon : inactiveIcon}
        color={focused ? COLORS._primary_color : COLORS._placeholder_color}
        size={size}
      />
    ),
    headerShown: false,
    tabBarActiveBackgroundColor: COLORS._secondary_color,
    tabBarInactiveBackgroundColor: COLORS._secondary_color,
    tabBarActiveTintColor: COLORS._primary_color,
    tabBarInactiveTintColor: COLORS._placeholder_color,
    tabBarLabelStyle: {
      fontFamily: "_700",
      fontSize: fsp(1.3),
    },
    tabBarStyle: {
      backgroundColor: COLORS._secondary_color,
      borderTopWidth:0,
      height:hp(8)
    },
  });

  return (
    <Tabs>
      <Tabs.Screen
        name="for-you"
        options={getOptions("For You", "heart-circle", "heart-circle-outline")}
      />
      <Tabs.Screen
        name="explore"
        options={getOptions("Explore", "compass", "compass-outline")}
      />
      <Tabs.Screen
        name="chats"
        options={getOptions(
          "Chats",
          "chatbubble-ellipses",
          "chatbubble-ellipses-outline"
        )}
      />
      <Tabs.Screen
        name="my-creation"
        options={getOptions('My Creation','star','star-outline')}
      />
      <Tabs.Screen
        name="account"
        options={getOptions('Account','accessibility','accessibility-outline')}
      />
    </Tabs>
  );
}
