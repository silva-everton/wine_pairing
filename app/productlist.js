import React, { useState, useEffect } from 'react';
import { Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity, Alert, TextInput, View } from 'react-native';
import { db } from "../firebaseConfig";
import { collection, onSnapshot } from 'firebase/firestore';
import { Link } from "expo-router";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const productsRef = collection(db, 'productlist');
    const unsubscribe = onSnapshot(productsRef, (snapshot) => {
      const newProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(newProducts);
    });

    return () => unsubscribe();
  }, []);

  const handlePress = (item) => {
    Alert.alert(
      "Wine Details",
      `Name: \n\n${item.name}\n\n\nDescription: \n\n${item.Description}\n\n\nBody: \n\n${item.Body}\n\n\nStyle: \n\n${item.style}`,
      [
        { text: "OK" }
      ],
      { cancelable: false }
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={styles.itemContainer}>
      <Text style={styles.itemStyle}>{item.name}</Text>
    </TouchableOpacity>
  );

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ImageBackground source={require('../assets/winery1.png')} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>WINE LIST</Text>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate(item.route)}>
            <View style={styles.footer}>
                <Text style={styles.link}>
                    <Link href="home">MENU</Link>
                </Text>
            </View>
        </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  itemStyle: {
    fontSize: 16,
    //alignContent: 'justify',
    color: '#666',
  },
  searchBar: { 
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  title: { 
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  link: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
},

});

export default ProductList;