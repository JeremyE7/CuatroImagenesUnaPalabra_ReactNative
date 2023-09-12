import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import useRandomWord from '../hooks/useRandomWord';

const ModalAnswerType = ({ modalVisible, setModalVisible, answerState, nextGame }) => {

    const {word} = useRandomWord()

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.container}>
                        <Text style={answerState ? styles.correctAnswer : styles.incorrectAnswer}>{(answerState ? 'Correcto' : 'Incorrecto')}</Text>
                        <Text style={styles.text}>La palabra era: {word}</Text>
                        {answerState ? <Text style={styles.textWiner}>¡Felicidades!</Text> : <Text style={styles.textLoser}>¡Sigue intentando!</Text>}
                        <Pressable style={styles.boton} onPress={nextGame}>
                            <Text style={styles.text}>Siguiente</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 10,
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
    text: {
        marginVertical: 10,
        color: '#fff',
    },
    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#bcdb1a',
        marginTop: 20
    },
    correctAnswer: {
        color: '#bcdb1a',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    incorrectAnswer: {
        color: '#ff0000',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    textWiner: {
        color: '#bcdb1a',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    textLoser: {
        color: '#ff0000',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    }

});
export default ModalAnswerType;