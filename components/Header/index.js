// Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Header({ onMenuPress }) {
  const navigation = useNavigation(); // Hook para acesso à navegação

  // Função para navegação para a tela inicial
  const handleHomePress = () => {
    navigation.navigate('Home'); // Substitua 'Home' pelo nome da sua tela inicial
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMenuPress}>
        <FontAwesome name="bars" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>MOBILE STORE</Text>
      <TouchableOpacity onPress={handleHomePress}>
        <FontAwesome name="home" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Alinhando os itens na horizontal
    alignItems: 'center', // Centralizando verticalmente
    padding: 15,
    borderBottomWidth: 1,
    backgroundColor: '#335AFF', // Fundo azul para o cabeçalho
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1, // Isso permite que o título ocupe o espaço restante
    textAlign: 'center', // Centraliza o título
  },
});
