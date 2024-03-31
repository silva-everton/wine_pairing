import { View, Text, SafeAreaView, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from "react-native";    
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';

export default function StylesOfWine() { 
    const navigation = useNavigation();

    const menuData = [
      { id: '1', title: 'Aromatic (Dry and Medium Dry)', route: 'profile'},
      { id: '2', title: 'Crispy (Dry - Unoaked)', route: 'profile'},
      { id: '3', title: 'Rich (Full Bodied - Oaked)', route: 'profile'},
      { id: '4', title: 'Fruity (Light - Medium Bodied)', route: 'profile'},
      { id: '5', title: 'Smooth (Medium - Full Bodied)', route: 'profile'},
      { id: '6', title: 'Porwerful (Big and intense)', route: 'profile'},
             
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(item.route)}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.menuText}>{item.title}</Text>
          </View>
        </TouchableOpacity>
    );

    return (
       
        <ImageBackground source={require('../assets/winery1.png')} style={styles.image}>
            <Text style={styles.paragraph}> STYLES OF WINE</Text>      
                <FlatList
                  data={menuData}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />
                <Text style={styles.link}>
                    <Link href="/">GO TO HOME</Link>
            </Text>
        </ImageBackground>
       
    )
}

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
      color: '#2e78b7',
      textAlign: 'center',
      marginVertical: 15,
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
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
});