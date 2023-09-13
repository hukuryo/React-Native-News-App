import { StatusBar, StyleSheet, View } from 'react-native';
import { ListItem } from './components/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem imageUrl={"https://picsum.photos/id/237/200/300"} 
        title={"サンプルのテキスト1です。asssssaasssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"} 
        author={"sample1"}
      />
      <ListItem imageUrl={"https://picsum.photos/seed/picsum/200/300"} 
        title={"サンプルのテキスト2です。asssssaasssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"} 
        author={"sample2"}
      />
      <ListItem imageUrl={"https://picsum.photos/200/300?grayscale"} 
        title={"サンプルのテキスト3です。asssssaasssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"} 
        author={"sample3"}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
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
