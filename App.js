import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  const colors = [
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' }
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={[styles.pink, styles.container]}>
        <FlatList
          data={colors}
          keyExtractor={(item, index) => `${item.colorName}_${index}`}
          renderItem={({ item }) => (
            <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
          )}
          ListEmptyComponent={
            <View style={styles.emptyBox}>
              <Text style={[styles.whiteText, styles.text]}>List Empty</Text>
            </View>
          }
          ListHeaderComponent={() => (
            <Text style={[styles.whiteText, styles.text, styles.title]}>
              Here are some boxes of different colors!!!
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  whiteText: {
    color: 'white'
  },
  title: {
    marginBottom: 20
  },
  pink: {
    backgroundColor: 'pink'
  },
  mainContainer: {
    backgroundColor: '#aa1',
    flex: 1
  },
  emptyBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  container: {
    backgroundColor: '#222',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1
  }
});

export default App;
