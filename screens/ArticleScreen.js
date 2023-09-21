import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export const ArticleScreen = () => {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <Text>ArticleScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
