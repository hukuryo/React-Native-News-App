import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ListItem } from './components/ListItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = "https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=b7b516733fb945e0a34703a8dba3b8c1";

export default function App() {
  const [ articles, setArticles ] = useState([]);

  const fetchArticles = async () => {
    try{
      const response = await axios.get(URL);
      setArticles(response.data.articles);

    }catch(error){
      console.log(error);
    }
    setArticles(response);
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <ListItem imageUrl={item.urlToImage} title={item.title} author={item.author}/>
        )}
        keyExtractor={(item, index) => item.toString()}
      >
      </FlatList>
      <StatusBar style="auto" />
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
