import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from "react-native";    
import { Link } from "expo-router";

export default function Profile() { 
    return (
        <SafeAreaView style={styles.container}> 
            <ImageBackground source={require('../assets/winery4.png')} style={styles.image}>
                <Text style={styles.paragraph}> My profile page</Text>      
                <Text style={styles.link}>
                    <Link href="/">GO TO HOME</Link>
                </Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 1,
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
});
