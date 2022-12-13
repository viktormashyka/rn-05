import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const DefaultPostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  console.log("route.params: ", route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts: ", posts);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Text>Here must be your photos</Text>
            <Image source={{ uri: item.photo }} style={styles.image} />
            <Text>Title: {item.state.pictureTitle}</Text>
            <Text>Location: {item.state.pictureLocation}</Text>
          </View>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Map")}>
        <Text style={styles.text}>Go to Map!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
        <Text style={styles.text}>Go to Comments!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: 350, height: 200 },

  text: {
    marginTop: 16,
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default DefaultPostsScreen;
