import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Main from './components/Main';
import { RandomWordContextProvider } from './context/randomWordContext';

export default function App() {
  return (
    <RandomWordContextProvider>
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
    </RandomWordContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#222',
    alignItems: 'center',
    paddingTop: 30,
  },
});
