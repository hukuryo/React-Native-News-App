import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export const ClipScreen = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
