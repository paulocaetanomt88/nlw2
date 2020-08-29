import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import { Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular, Archivo_700Bold, Poppins_400Regular, Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}

// Alguns conceitos:
// JSX - XML dentro do Javascript
// View - Tudo que representa um bloco em html: div, section, footer...
// StyleSheet - é como se fosse um objeto no javascript usado para estilização
// const styles recebe a função StyleSheet
// que foi importada do react-native e que chama o método .create,
// o qual recebe como parâmetro um objeto js para estilização
// necessário fazer a importação 'import { StyleSheet, Text, View } from 'react-native'; no topo do código para usar estes recursos
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    color: '#FFF',
    fontWeight: 'bold',
  },
}); */
