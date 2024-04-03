import React, { useState } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet } from 'react-native';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([
        { id: '1', name: 'Wine 1', price: '20', image: require('../assets/pasta.png') },
        { id: '2', name: 'Wine 2', price: '25', image: require('../assets/pasta.png') },
        // ... other wines ...
    ]);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={item.image} style={styles.itemImage} />
          <View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
          <Button title="Remove" onPress={() => {/* remove item from cart */}} />
        </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="Checkout" onPress={() => {/* proceed to checkout */}} />
    </View>
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
      flexDirection: 'row',
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
      width: 50,
      height: 50,
      marginRight: 10,
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

export default ShoppingCart;