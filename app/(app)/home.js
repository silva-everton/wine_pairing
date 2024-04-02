import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { Button } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";



export default function Home(){  
  const {logout, user} = useAuth();
  const navigation = useNavigation();

  const handleLogout = async () => {
    await logout();
  }
  //console.log('user :', user);

  useEffect(() => {
    navigation.setOptions({
      title: 'MENU',
    });
  }, [navigation]);
  
  const menuData = [
    { id: '1', title: 'Styles of Wine', route: 'stylesofWine', image: require('../../assets/stylesofwine1.png')},
    { id: '2', title: 'Types of Grapes', route: 'grapes' , image: require('../../assets/typesofgrape.png')},
    { id: '3', title: 'Food and Wine Pairing', route: 'foodMenu' , image: require('../../assets/foodandwinepairing2.png')},
    { id: '4', title: 'Order Online', route: 'profile' , image: require('../../assets/orderonline.png')},
    { id: '5', title: 'My Orders', route: 'profile' , image: require('../../assets/mylist.png')},
    { id: '6', title: 'My List', route: 'profile' , image: require('../../assets/heart.png')},
    { id: '7', title: 'My Profile', route: 'profile' , image: require('../../assets/myprofile.png')},
   
  ];

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(item.route)}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={item.image} style={styles.menuItemImage} />
        <Text style={styles.menuItemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <ImageBackground source={require('../../assets/winery1.png')} style={styles.container}>
          
       <FlatList
        data={menuData}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id}
      />
       <Button title="Logout" onPress={handleLogout}>Logout</Button>
    
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  menuItemText: {
    fontSize: 18,
    color: '#333',
  },
  menuItemImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
});