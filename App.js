import React from 'react';
import RNUssdDial from 'react-native-ussd-dial';
import { View, StyleSheet } from 'react-native';

import { Button } from './src/components/Button';

const App = () => {
  const getDeviceName = async () => {
    // метод библиотеки должен с помощью `async-await` возвращать из нативного кода (Java, Obj-C) строковое значение модели девайса
    const deviceName = await RNUssdDial.getDeviceName();
    console.log('deviceName: ', deviceName);
  };

  return (
    <View style={styles.container}>
      <Button onPress={getDeviceName} label="Get device name" color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
