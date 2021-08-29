import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const colorBoxText = `${colorName}: ${hexCode}`;
  const boxColor = {
    backgroundColor: hexCode
  };
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white'
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={textColor}>{colorBoxText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    paddingVertical: 10
  }
});

export default ColorBox;
