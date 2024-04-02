import { View, Text, SafeAreaView, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Image, TextInput,KeyboardAvoidingView, Platform } from "react-native";    
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';


export default function FoodMenu() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const menuData = [
    { id: '1', title: 'Meat', route: 'wineDescription', image: require('../assets/meat.png')},
    { id: '2', title: 'Seafood', route: 'wineDescription', image: require('../assets/seafood.png')},
    { id: '3', title: 'Pasta', route: 'wineDescription', image: require('../assets/pasta.png')},
    { id: '4', title: 'Pizza', route: 'wineDescription', image: require('../assets/pizza.png')},
    { id: '5', title: 'Ethnic', route: 'wineDescription', image: require('../assets/padthai.png')},
    { id: '6', title: 'Vegetables', route: 'wineDescription', image: require('../assets/vegetables.png')},
    { id: '7', title: 'Salads', route: 'wineDescription', image: require('../assets/salad.png')},
    { id: '8', title: 'Cheese', route: 'wineDescription', image: require('../assets/cheese.png')},
   
           
  ];

  const filteredMenuData = menuData.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));


  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(item.route)}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={item.image} style={styles.menuImage} />
        <Text style={styles.menuText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>

          <ImageBackground source={require('../assets/winery.jpg')} style={styles.image}>
              <Text style={styles.paragraph}> FOOD CATEGORY </Text>   
                  <TextInput
                      style={styles.searchInput}
                      value={search}
                      onChangeText={setSearch}
                      placeholder="Search"
                  />   
                  <FlatList
                  data={filteredMenuData}
                  renderItem={renderItem}
                  />
                  <View style={styles.footer}>
                  <Text style={styles.link}>
                      <Link href="home">GO TO MENU</Link>
                  </Text>
                  </View>
          </ImageBackground>
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
    paragraph: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    borderTopWidth: 1,
    //backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    marginTop: 85,    
  },
  link: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
  menuItem: {
      backgroundColor: 'white',
      padding: 15,
      marginBottom: 10,
      borderRadius: 5,
      alignSelf: 'stretch', // make the item take up the full width of the container
      marginLeft: 20, // add some margin to the left
      marginRight: 20, // add some margin to the right
  },
    menuText: {
      fontSize: 18,
      color: '#333',
      textAlign: 'center', // center the text
  },
  menuImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  footer: {
    //flex: 1,
    justifyContent: 'flex-end',
    //marginBottom: 10,
  },
  searchInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingLeft: 10,
      backgroundColor: 'white',
      marginBottom: 10,
      marginRight: 20,
      marginLeft: 20,
  },


});