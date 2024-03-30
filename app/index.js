import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, ActivityIndicator } from "react-native";    
import { Link } from "expo-router";
import AuthenticationForm from "../components/AuthenticationForm";

export default function StartPage(){

    return (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="gray" />    
        </View>

    )
}

//<Text style={styles.paragraph}> Wine Pairing Lover</Text>    
//               <Text style={styles.link}>
//                   <Link href="/profile">GO TO PROFILE</Link>
//               </Text>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 0,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
    },
    link: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 30,
      },
});