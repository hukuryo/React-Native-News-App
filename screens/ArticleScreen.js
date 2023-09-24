import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

// 記事の詳細ページ
export const ArticleScreen = ({ route }) => {
  const { article } = route.params;

  return <WebView style={styles.container} source={{ uri: article.url }} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
