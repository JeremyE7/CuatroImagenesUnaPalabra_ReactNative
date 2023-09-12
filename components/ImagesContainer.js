import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ImagesContainer = ({images}) => {
    return (
        <View style={styles.container}>
            {images && images.map((image, index) => {
                return <Image key={index} style={styles.image} source={{uri:image}}/>
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 30,
        flexWrap: 'wrap',
    },
    image: {
        resizeMode: 'cover',
        width: '50%',
        height: 150,
        borderColor: '#fff',
        borderWidth: 2,
    }
});


export default ImagesContainer;