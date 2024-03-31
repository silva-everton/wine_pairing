import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth } from "../../context/authContext";
import { Button } from "react-native-paper";


export default function Home(){  
  const {logout, user} = useAuth();
  const handleLogout = async () => {
    await logout();
  }
  //console.log('user :', user);

  const menuData = [
    { id: '1', title: 'Styles of Wine', image: require('../assets/myprofile.png') },
    { id: '2', title: 'Types of Grapes', image: require('../assets/typesofgrape.png') },
    { id: '3', title: 'Food and Wine Pairing', image: require('../assets/foodandwinepairing2.png') },
    { id: '4', title: 'Order Online', image: require('../assets/orderonline.png') },
    { id: '5', title: 'My Orders', image: require('../assets/mylist.png') },
    { id: '6', title: 'My list', image: require('../assets/heart.png') },
    { id: '7', title: 'My Profile', image: require('../assets/myprofile.png') }, 
    
  ];

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
      <Image source={item.image} style={{ width: 50, height: 50, marginRight: 10 }} />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
  
  





  return (
    <View>
       <Text> Home</Text>  
       <FlatList
        data={menuData}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id}
      />
       <Button title="Logout" onPress={handleLogout}>Logout</Button>
    </View>
  )
}