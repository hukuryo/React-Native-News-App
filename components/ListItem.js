import { Image, StyleSheet, Text, View } from 'react-native';

export const ListItem = (props) => {
    const { imageUrl, title, author } = props
    return (
        <View style={styles.itemContainer}>
            <View style={styles.leftContainer}>
                <Image
                    style={{width: 100, height: 100}}
                    source={{uri: imageUrl}}
                >
                </Image>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.text} numberOfLines={3}>
                    {title}
                </Text>
                <Text style={styles.subText}>
                    {author}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 100,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "white",
        marginBottom: 10
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
