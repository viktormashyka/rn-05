import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../router";
import db from "../firebase/config";
import {} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { authStateChangeUser } from "../redux/auth/authOperations";

const Main = () => {
  //   const [user, setUser] = useState(null);
  //   console.log("user: ", user);
  const { stateChange } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authStateChangeUser());
  }, [authStateChangeUser]);
  //   db.auth().onAuthStateChanged((user) => setUser(user));
  // const routing = useRoute(stateChange);
  const routing = useRoute(null);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
