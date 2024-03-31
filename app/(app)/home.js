import { View, Text,} from "react-native";
import React from "react";
import { useAuth } from "../../context/authContext";
import { Button } from "react-native-paper";

export default function Home(){  
  const {logout, user} = useAuth();
  const handleLogout = async () => {
    await logout();
  }
  //console.log('user :', user);
  
  
  return (
    <View>
       <Text> Home</Text>  
       <Button title="Logout" onPress={handleLogout}>Logout</Button>
    </View>
  )
}