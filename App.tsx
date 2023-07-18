import React from 'react';
import { CalculadoraScreen } from './screens/CalculadoraScreen';
import { SafeAreaView } from 'react-native';
import { styles } from './theme/AppTheme';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor='black' style='light'/>
      <CalculadoraScreen />
    </SafeAreaView>
  )
}


export default App;