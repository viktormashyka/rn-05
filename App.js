// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
// import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";

// import icons
// import Ionicons from "@expo/vector-icons/Ionicons";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
// import { useFonts } from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });
};

// const AuthStack = createStackNavigator();

// import LoginScreen from "./Screens/auth/LoginScreen";
// import RegistrationScreen from "./Screens/auth/RegistrationScreen";
// import Home from "./Screens/main/Home";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   // "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  //   "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  //   "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  const [isReady, setIsReady] = useState(false);

  const routing = useRoute({});

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return <NavigationContainer>{routing}</NavigationContainer>;

  // return (
  //   <NavigationContainer>
  //     {/* <NavigationContainer onLayout={onLayoutRootView}> */}
  //     <AuthStack.Navigator initialRouteName="Login">
  //       <AuthStack.Screen
  //         options={{ headerShown: false }}
  //         name="Registration"
  //         component={RegistrationScreen}
  //       />
  //       <AuthStack.Screen
  //         options={{ headerShown: false }}
  //         name="Login"
  //         component={LoginScreen}
  //       />
  //       <AuthStack.Screen
  //         // options={{ headerShown: false }}
  //         name="Home"
  //         component={Home}
  //         options={{
  //           headerShown: false,
  //           title: "Home screen",
  //           headerStyle: { backgroundColor: "#f4511e" },
  //           headerTintColor: "#fff",
  //           headerTitleStyle: { fontFamily: "Roboto-Bold", fontSize: 16 },
  //           // headerRight: () => (
  //           //   <Button
  //           //     onPress={() => navigation.navigate("Login")}
  //           //     title="Log out"
  //           //     color="#fff"
  //           //   />
  //           // ),
  //         }}
  //       />
  //     </AuthStack.Navigator>
  //   </NavigationContainer>
  // );
}

//  WARN  expo-app-loading is deprecated in favor of expo-splash-screen: use SplashScreen.preventAutoHideAsync() and SplashScreen.hideAsync() instead. https://docs.expo.dev/versions/latest/sdk/splash-screen/
