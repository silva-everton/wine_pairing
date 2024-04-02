import { View, Text, SafeAreaView, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Image } from "react-native";    
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function StylesOfWine() { 
    const navigation = useNavigation();

    const menuData = [
      { id: '1', title: 'Aromatic (Dry and Medium Dry)', route: 'aromaticOptions', image: require('../assets/aromatic.png')},
      { id: '2', title: 'Crispy (Dry - Unoaked)', route: 'aromaticOptions', image: require('../assets/crisp.png')},
      { id: '3', title: 'Rich (Full Bodied - Oaked)', route: 'aromaticOptions', image: require('../assets/rich.png')},
      { id: '4', title: 'Fruity (Light - Medium Bodied)', route: 'aromaticOptions', image: require('../assets/fruity.png')},
      { id: '5', title: 'Smooth (Medium - Full Bodied)', route: 'aromaticOptions', image: require('../assets/smooth.png')},
      { id: '6', title: 'Porwerful (Big and intense)', route: 'aromaticOptions', image: require('../assets/powerful.png')},
             
    ];

    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(item.route)}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={item.image} style={styles.menuImage} />
            <Text style={styles.menuText}>{item.title}</Text>
          </View>
          <Icon name="chevron-right" size={15} color="#000" />
        </View>
      </TouchableOpacity>
    );

    return (
       
        <ImageBackground source={require('../assets/background2.jpg')} style={styles.image}>
            <Text style={styles.paragraph}> STYLES OF WINE</Text>      
                <FlatList
                  data={menuData}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />
                <View style={styles.footer}>
                  <Text style={styles.link}>
                    <Link href="home">GO TO MENU</Link>
                  </Text>
                </View>
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
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
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
        backgroundColor: 'white',
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
    menuImage: {
      width: 60,
      height: 60,
      marginRight: 10,
    },
    footer: {
      //flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36,
    },


});