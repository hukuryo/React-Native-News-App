import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { ListItem } from '../components/ListItem';
import axios from 'axios';
import Constants from "expo-constants";

const URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${Constants.manifest2.extra.expoClient.extra.newsApiKey}`;

const HomeScreen = () => {
    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {
        try {
            const response = await axios.get(URL);
            setArticles(response.data.articles);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchArticles();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={articles}
                renderItem={({ item }) => (
                    <ListItem imageUrl={item.urlToImage} title={item.title} author={item.author} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    itemContainer: {
        height: 100,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "white"
    },
    leftContainer: {
        width: 100,
    },
    rightContainer: {
        flex: 1,
        padding: 10,
        justifyContent: "space-between"
    },
    text: {
        fontWeight: "bold"
    },
    subText: {
        fontSize: 12
    }
});

export default HomeScreen; // コンポーネントをデフォルトエクスポート
