import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './Card.style'


const NewsCard = ({ news }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: news.imageUrl }}></Image>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.description}>{news.description}</Text>
                <Text style={styles.authorTitle}>Author: <Text style={styles.author}>{news.author}</Text></Text>
            </View>
        </View>
    );
}

export default NewsCard;