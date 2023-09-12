import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import ImagesContainer from './ImagesContainer';
import Formulario from './Formulario';
import useImages from '../hooks/useImages';

const Main = () => {

    const {images, loading, word, getAnotherWord} = useImages();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>En base a estas cuatro imagenes escoge la palabra correcta</Text>
            {!loading ? <ImagesContainer images={images}/> : <ActivityIndicator style={{paddingVertical:162}} size="large" color="#00ff00" />}
            <Formulario wordToCompare={word}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 30
    },
    text: {
       color: '#fff',
    }
});
export default Main;