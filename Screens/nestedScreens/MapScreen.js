import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet, Text } from "react-native";

const MapScreen = ({ route }) => {
  console.log(`route.params.location: ${route.params.location}`);
  // const location = route.params.location;
  const { latitude, longitude } = route.params.location;
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          // latitude: latitude,
          // longitude: longitude,
          latitude,
          longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} title="travel photo" />
        <Text>MapScreen</Text>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
