import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../components/Button';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const UserIdentification = () => {
  const navigation = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  async function handleSubmit() {
    if (!name) return Alert.alert('Me diz como chamar você! 😢');
    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle:
          'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });
    } catch {
      Alert.alert('Não foi possível salvar o seu nome! 😢');
    }
  }

  function handleInputBlur() {
    setIsFocus(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocus(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>{isFilled ? '😄' : '😀'}</Text>
                <Text style={styles.title}>Como podemos{'\n'}chamar você?</Text>
              </View>

              <TextInput
                style={[
                  styles.input,
                  (isFocus || isFilled) && { borderColor: colors.green },
                ]}
                placeholder="Digite seu nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <View style={styles.footer}>
                <Button title={'Confirmar'} onPress={handleSubmit}></Button>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  footer: {
    paddingHorizontal: 20,
    width: '100%',
    marginTop: 40,
  },
});
