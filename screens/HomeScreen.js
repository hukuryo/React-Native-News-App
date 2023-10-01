import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { ListItem } from "../components/ListItem";
import axios from "axios";
import Constants from "expo-constants";

const URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${Constants.manifest2.extra.expoClient.extra.newsApiKey}`;

const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
    setLoading(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color="#0000ff"
            style={styles.loadingIcon}
          />
        ) : (
          <FlatList
            data={articles}
            renderItem={({ item }) => (
              <ListItem
                imageUrl={item.urlToImage}
                title={item.title}
                author={item.author}
                onPress={() =>
                  navigation.navigate("Article", { article: item })
                }
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  itemContainer: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
  },
  leftContainer: {
    width: 100,
  },
  loadingIcon: {
    flex: 1,
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "bold",
  },
  subText: {
    fontSize: 12,
  },
});

export default HomeScreen; // コンポーネントをデフォルトエクスポート
