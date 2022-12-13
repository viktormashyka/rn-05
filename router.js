import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import icons
// import { Feather } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
// import Home from "./Screens/main/Home";
import PostsScreen from "./Screens/main/PostsScreen";
import ProfileScreen from "./Screens/main/ProfileScreen";
import CreatePostsScreen from "./Screens/main/CreatePostsScreen";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      //   tabBarOptions={{ showLabel: false }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "CreatePosts") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <MainTab.Screen
        // options={{
        //   tabBarIcon: (focused, size, color) => (
        //     <MaterialCommunityIcons
        //       name="post-outline"
        //       size={24}
        //       color={color}
        //     />
        //   ),
        // }}
        options={{ headerShown: false }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        // options={{
        //   tabBarIcon: (focused, size, color) => (
        //     <MaterialIcons name="post-add" size={24} color={color} />
        //   ),
        // }}
        options={{ headerShown: false }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        // options={{
        //   tabBarIcon: (focused, size, color) => (
        //     <Feather name="user" size={24} color={color} />
        //   ),
        // }}
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
