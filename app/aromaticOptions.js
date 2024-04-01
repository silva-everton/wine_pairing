import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, Button, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Link } from "expo-router";

export default function aromaticOptions() { 
  const navigation = useNavigation();

    const wines = [
      { id: '1', name: 'Riesling (Kabinett and Spatlese', route: 'stylesofWine'},
      { id: '2', name: 'Pinot Gris', route: 'stylesofWine'},
      { id: '3', name: 'Muscat / Moscato' , route: 'stylesofWine'},
      { id: '4', name: 'Fiano' , route: 'stylesofWine'},
      { id: '5', name: 'Chenin Blanc (Medium-Dry)' , route: 'stylesofWine'},
    ];

    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.route)}>
        <Text style={styles.title}>{item.name}</Text>
        <Icon name="chevron-right" size={20} color="#000" style={styles.icon} />
      </TouchableOpacity>
    );

    return (
      <ImageBackground source={require('../assets/background3.jpg')} style={styles.backgroundImage}>
        <Image source={require('../assets/aromatic.png')} style={styles.image} />
        <Text style={styles.headerTitle}>Aromatic (Dry and Medium Dry)</Text>
        <FlatList
          data={wines}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
         <View style={styles.footer}>
            <Text style={styles.link}>
              <Link href="home">GO TO MENU</Link>
             </Text>
          </View>
      </ImageBackground>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'rgba(122, 162, 227, 0.4)', // make the background color 60% transparent
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginRight: 10, // add some margin to the right of the title
  },
  image: {
    width: 80, // set the width of the image
    height: 80, // set the height of the image
    resizeMode: 'contain', // keep the aspect ratio of the image
    marginTop: 60, // add some margin to the top of the image
    marginBottom: 19, // add some margin to the bottom of the image
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 20, // add some margin to the bottom of the title
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    //marginRight: 10, // add some margin to the right of the icon
    marginLeft: 10, // add some margin to the left of the icon

  },
  link: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 15,
    marginBottom: 30,
  },
}); 

//export default AromaticOptions;