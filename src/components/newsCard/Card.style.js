import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({

    container: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 3.5,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginBottom: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        margin: 3,
        marginLeft: 10,
    },
    description: {
        margin: 3,
        marginLeft: 10,
    },
    inner_container: {
        padding: 5
    },
    authorTitle: {
        textAlign: 'right',
        color: 'black',
        fontSize: 14,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
    },
    author: {
        fontStyle: 'italic',
        textAlign: 'right',
        fontWeight: 'bold',
        color: 'black',
        marginTop: 5,
        fontSize: 16,
        marginBottom: 5,
        marginRight: 5,
    }
});