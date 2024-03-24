import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image } from "react-native";    
import { Link } from "expo-router";
import AuthenticationForm from "../components/AuthenticationForm";

export default function Home (){

    return (
        <SafeAreaView style={styles.container}> 
            <ImageBackground source={require('../assets/winery4.png')} style={styles.image}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <AuthenticationForm title="Register an account" action="Sign up"/> 
            </ImageBackground>
        </SafeAreaView>

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