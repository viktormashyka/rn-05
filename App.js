import { useState, useEffect } from "react";

import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import Main from "./components/Main";

// import * as Font from "expo-font";
// import AppLoading from "expo-app-loading";

// import { useFonts } from "expo-font";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

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

  // const [isReady, setIsReady] = useState(false);

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadFonts}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );

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
