import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetails = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.itemName}>{product.name}</Text>
      <Text style={styles.itemStyle}>{product.style}</Text>
      <Text style={styles.itemBody}>{product.Body}</Text>
      <Text style={styles.itemDescription}>{product.Description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  itemStyle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  itemBody: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  itemDescription: {
    fontSize: 16,
    color: '#666',
  },
});

export default ProductDetails;