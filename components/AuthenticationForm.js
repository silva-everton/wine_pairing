import { View, Text, TextInput, Pressable, SafeAreaView, StyleSheet, ImageBackground } from "react-native";    
import { Link } from "expo-router";


export default function AuthenticationForm(props) { 
    return (
        <View style={styles.container}> 
            <ImageBackground source={require('../assets/winery4.png')} style={styles.image}>
                <Text> {props.title}</Text>

                <Text style={styles.paragraph}> 
                    Email
                </Text>   

                <TextInput style={styles.paragraph}> 
                    Email
                </TextInput> 

                <Text style={styles.paragraph}> 
                    Password
                </Text>   

                <TextInput style={styles.paragraph}> 
                    Password
                </TextInput>

                <Pressable style={styles.paragraph}> 
                    <text> {props.action} </text>
                </Pressable>
                
                <Text style={styles.link}>
                    <Link href="/profile">GO TO PROFILE</Link>
                </Text>
            </ImageBackground>
        </View>
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
