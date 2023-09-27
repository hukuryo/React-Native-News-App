import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { useSelector, useDispatch } from "react-redux";
import { ClipButton } from "../components/ClipButton";
import { addClip, deleteClip } from "../store/userSlice";

// 記事の詳細ページ
export const ArticleScreen = ({ route }) => {
  const { article } = route.params;
  const dispatch = useDispatch();
  const clips = useSelector((state) => state.user.clips);

  const isClipped = clips.some((clip) => clip.url === article.url);

  const onPressClip = () => {
    if (isClipped) {
      dispatch(deleteClip(article));
    } else {
      dispatch(addClip(article));
    }
  };

  return (
    <>
      <ClipButton onPress={onPressClip} enabled={isClipped} />
      <WebView style={styles.container} source={{ uri: article.url }} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
