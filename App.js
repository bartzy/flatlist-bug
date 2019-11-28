import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

function keyExtractor(item, index) {
  return index.toString();
}

const renderItem = ({item, index, separators}) => {
  console.log(`renderItem called (index = ${index}), item: ${item}`);
  return (
    <View>
      <Text>{item}</Text>
    </View>
  );
};

const SomeList = () => {
  const names = ['Bob', 'Alice', 'John'];
  const [data, setData] = useState([]);
  console.log('SomeList called ,data: ', data);

  useEffect(() => {
    setTimeout(() => {
      setData(names);
    }, 1000);
  }, []);

  if (data.length == 0) return null;

  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

const App = () => {
  return (
    <SafeAreaView>
      <SomeList />
    </SafeAreaView>
  );
};

export default App;
