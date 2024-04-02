import { View, Text, SafeAreaView, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Image, TextInput,KeyboardAvoidingView, Platform } from "react-native";    
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function grapes() {

    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    const menuData = [
      { id: '1', title: 'Refosco', route: 'wineDescription', image: require('../assets/fruity.png')},
      { id: '2', title: 'Ribolla Gialla', route: 'wineDescription', image: require('../assets/crisp.png')},
      { id: '3', title: 'Riesling (Dry)', route: 'wineDescription', image: require('../assets/crisp.png')},
      { id: '4', title: 'Riesling (Kabinett & Spatlese)', route: 'wineDescription', image: require('../assets/aromatic.png')},
      { id: '5', title: 'Roussanne', route: 'wineDescription', image: require('../assets/rich.png')},
      { id: '6', title: 'Sangrantino', route: 'wineDescription', image: require('../assets/powerful.png')},
      { id: '7', title: 'Sangiovese', route: 'wineDescription', image: require('../assets/powerful.png')},
      { id: '8', title: 'Saperavi', route: 'wineDescription', image: require('../assets/powerful.png')},
      { id: '9', title: 'Sauvignon Blanc (Oaked)', route: 'wineDescription', image: require('../assets/rich.png')},
      { id: '10', title: 'Sauvignon Blanc (Unoaked)', route: 'wineDescription', image: require('../assets/crisp.png')},
      { id: '11', title: 'Semillon', route: 'wineDescription', image: require('../assets/rich.png')},
      { id: '12', title: 'Syrah (Shiraz)', route: 'wineDescription', image: require('../assets/powerful.png')},
             
    ];

    const filteredMenuData = menuData.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));


    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(item.route)}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={item.image} style={styles.menuImage} />
            <Text style={styles.menuText}>{item.title}</Text>
          </View>
          <Icon name="chevron-right" size={15} color="#000" />
        </View>
      </TouchableOpacity>
    );

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>

            <ImageBackground source={require('../assets/winery.jpg')} style={styles.image}>
                <Text style={styles.paragraph}> GRAPES</Text>   
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
      marginTop: 60,    
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