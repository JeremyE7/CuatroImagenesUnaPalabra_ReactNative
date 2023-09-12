import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import useRandomWord from '../hooks/useRandomWord';
import ModalAnswerType from './ModalAnswerType';

const Formulario = () => {
    const [wordToCompare, setWordToCompare] = useState('')
    const [answerState, setAnswerState] = useState(null)
    const {compareWords, getAnotherWord} = useRandomWord()
    const [modalVisible, setModalVisible] = useState(false);

    const obtenerValorDelTextInput = () => {
        const answer = compareWords(wordToCompare)
        console.log(answer);
        setAnswerState(answer)
        setModalVisible(true)
        console.log("wadaw");
    }

    const nextGame = () => {
        setModalVisible(false)
        getAnotherWord()
        setAnswerState(null)
        setWordToCompare('')
    }

    return (
        <View style={styles.container}>
            <ModalAnswerType modalVisible={modalVisible} setModalVisible={setModalVisible} answerState={answerState} nextGame={nextGame} />
            <TextInput
                placeholder="Escribe tu respuesta...."
                style={styles.input}
                onChangeText={(text) => setWordToCompare(text)} // Actualiza la referencia con el texto
                value={wordToCompare} // Actualiza el texto con la referencia
            />
            <Pressable style={styles.boton} onPress={obtenerValorDelTextInput}>
                <Text style={styles.text}>Enviar</Text>
            </Pressable>
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
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 4,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#1a8adb',
    },
});

export default Formulario;
