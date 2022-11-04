import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import data from './assets/data';
import SearchBar from './components/SearchBar/SearchBar';
import Card from './components/Card/Card';

export default function App() {
  const renderItem = ({ item }) => <Card data={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MYTECHSTORE</Text>
      <FlatList
        ListHeaderComponent={() => <SearchBar />}
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8a2be2',
    margin:10,
  },
});
