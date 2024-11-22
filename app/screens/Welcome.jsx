import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CurrencyConverter = () => {
  const [inputValue, setInputValue] = useState('');

  // Save input to AsyncStorage whenever it changes
  const saveInput = async (value) => {
    try {
      await AsyncStorage.setItem('lastInput', value);
    } catch (error) {
      console.error('Failed to save input', error);
    }
  };

  // Load the saved input on component mount
  const loadInput = async () => {
    try {
      const savedValue = await AsyncStorage.getItem('lastInput');
      if (savedValue) {
        setInputValue(savedValue);
      }
    } catch (error) {
      console.error('Failed to load input', error);
    }
  };

  useEffect(() => {
    loadInput();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={(text) => {
          setInputValue(text);
          saveInput(text); // Persist the input value
        }}
        keyboardType="numeric"
        placeholder="Enter amount"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default CurrencyConverter;
