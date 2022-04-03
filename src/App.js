import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, FlatList, ScrollView, Dimensions } from 'react-native';

import NewsCard from './components/newsCard';
import news_data from './components/news_data.json';
import news_banner_data from './components/news_banner_data.json';

const App = (props) => {

    const renderNews = ({ item }) => <NewsCard news={item} />

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ListHeaderComponent={() => (
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {news_banner_data.map(bannerNews => (
                            <Image
                                source={{ uri: bannerNews.imageUrl }}
                                key={bannerNews.id}
                                style={styles.banner_image} />
                        ))}
                    </ScrollView>)}
                keyExtractor={(item, index) => item.u_id.toString()}
                data={news_data}
                renderItem={renderNews}>
            </FlatList>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#cacaca',
    },
    banner_image: {
        marginLeft: 0,
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width / 2,
    }
})


export default App;

