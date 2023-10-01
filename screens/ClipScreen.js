import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useSelector } from "react-redux";
import { ListItem } from "../components/ListItem";

//クリップした記事の一覧ページ
export const ClipScreen = ({ navigation }) => {
  const clips = useSelector((state) => state.user.clips);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <FlatList
          data={clips}
          renderItem={({ item }) => (
            <ListItem
              imageUrl={item.urlToImage}
              title={item.title}
              author={item.author}
              onPress={() => navigation.navigate("Article", { article: item })}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
