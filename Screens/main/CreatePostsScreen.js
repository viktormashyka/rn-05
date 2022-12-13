import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";
// import { TouchableOpacity } from "react-native-gesture-handler";
import * as Location from "expo-location";

const initialState = { pictureTitle: "", pictureLocation: "" };

const CreatePostsScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  // const [errorMsg, setErrorMsg] = useState(null);

  const takePhoto = async () => {
    console.log("takePhoto...");
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log("latitude", location.coords.latitude);
    console.log("longitude", location.coords.longitude);
    console.log("photo: ", photo);
    setPhoto(photo.uri);
    console.log("photo.uri", photo);
  };

  const sendPhoto = () => {
    console.log("sendPhoto...");
    console.log("navigation: ", navigation);
    console.log("state: ", state);
    setState(initialState);
    navigation.navigate("DefaultPosts", { photo, state });
  };

  // useEffect(() => {
  //   // Location.requestPermissionsAsync() // deprecated
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     console.log("status: ", status);
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       console.log("errorMsg: ", errorMsg);
  //       return;
  //     }
  //   })();
  // }, []);

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Camera style={styles.camera} ref={setCamera}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image style={styles.image} source={{ uri: photo }} />
            </View>
          )}
          <TouchableOpacity style={styles.snapContainer} onPress={takePhoto}>
            <Text style={styles.snap}>SNAP</Text>
          </TouchableOpacity>
        </Camera>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? 20 : 150,
            }}
          >
            <TextInput
              value={state.pictureTitle}
              placeholder="Title"
              style={styles.input}
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, pictureTitle: value }))
              }
            />
            <TextInput
              value={state.pictureLocation}
              placeholder="Location"
              style={styles.input}
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setState((prevState) => ({
                  ...prevState,
                  pictureLocation: value,
                }))
              }
            />
            <TouchableOpacity style={styles.sendBtn} onPress={sendPhoto}>
              <Text style={styles.sendLabel}>SEND</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: "50%",
    marginHorizontal: 2,
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  snap: { color: "#fff" },
  snapContainer: {
    borderWidth: 1,
    borderColor: "#ff0000",
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  sendBtn: {
    marginHorizontal: 30,
    height: 40,
    borderWidth: 2,
    borderColor: "#20b2aa",
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sendLabel: { color: "#20b2aa", fontSize: 20 },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },

  image: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },

  form: { marginHorizontal: 16 },

  input: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#212121",
    marginBottom: 10,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    // color: "#BDBDBD",
    color: "#212121",
  },
});

export default CreatePostsScreen;
