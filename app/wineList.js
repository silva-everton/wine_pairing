import React, { useState } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, ImageBackground,ToastAndroid } from 'react-native';

const WineList = () => {

    const [cart, setCart] = useState([]);

  const [wines, setWines] = useState([
    { id: '1', name: 'Wine 1', price: '20', image: require('../assets/bottle1.jpg') },
    { id: '2', name: 'Wine 2', price: '25', image: require('../assets/bottle2.jpg') },
    { id: '3', name: 'Wine 3', price: '20', image: require('../assets/bottle3.jpg') },
    { id: '4', name: 'Wine 4', price: '25', image: require('../assets/bottle4.png') },
    { id: '5', name: 'Wine 5', price: '20', image: require('../assets/bottle5.png') },
    { id: '6', name: 'Wine 6', price: '25', image: require('../assets/bottle6.png') },
    { id: '7', name: 'Wine 7', price: '20', image: require('../assets/bottle7.png') },
    
  ]);

  const addToCart = (item) => {
    setCart(currentCart => [...currentCart, item]);
    ToastAndroid.show(`${item.name} added to cart`, ToastAndroid.SHORT);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(item)} />
    </View>
  );

  return (
    <ImageBackground source={require('../assets/winery1.png')} style={styles.container}>
      <Text style={styles.title}>Wine List</Text>
      <FlatList
        data={wines}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  itemImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default WineList;