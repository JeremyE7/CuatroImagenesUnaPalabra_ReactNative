import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Cuatro Imagenes una palabra</Text>
            <Text>¿Que palabra es?</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#bcdb1a',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,        
    },
    text: {
        fontSize: 20,
        color: '#000'
    }
});


export default Header;