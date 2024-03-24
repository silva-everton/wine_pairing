import { View, Text, TextInput, Pressable, SafeAreaView, StyleSheet, ImageBackground } from "react-native";    
import { Link } from "expo-router";

export default function AuthenticationForm(props) { 
    return (
        <View style={styles.container}> 
            <Text style={styles.title}>{ props.title }</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true}/>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>{ props.action }</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      marginHorizontal: 20,
      marginVertical: 20,
      //marginBottom: 190,
      //marginTop: 190,
      //backgroundColor: 'white',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 50,
      justifyContent: 'center',
      //color: '#6750a4',
    },
    label: {
      fontSize: 18,
      marginBottom: 5,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
      paddingLeft: 10,
      borderRadius: 5,
    },
    button: {
      backgroundColor: '#6750a4',
      padding: 10,
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
});
