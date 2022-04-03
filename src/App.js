import React from 'react';
import { View, StyleSheet, SafeAreaView, FlatList } from 'react-native';

import NewsCard from './components/newsCard';
import news_data from './components/news_data.json';

const App = (props) => {

    const renderNews = ({ item }) => <NewsCard news={item} />

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    keyExtractor={(item, index) => item.u_id.toString()}
                    data={news_data}
                    renderItem={renderNews}>
                </FlatList>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#cacaca',
    },
})


export default App;

