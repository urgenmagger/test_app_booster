import React, { FC } from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
export const BUTTONWIDTH = screenWidth * 0.9;

export const Button = ({ onPress, label, color }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: BUTTONWIDTH,
          backgroundColor: color,
        },
      ]}
      onPress={() => onPress()}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    shadowRadius: 4,
    alignItems: 'center',
    borderRadius: 50,
    shadowOpacity: 0.8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 3, // Shadow on Android
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'rgba(0, 0, 0, 0.3)', // Shadow on iOS
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
