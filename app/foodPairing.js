import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from "expo-router";


const foodPairing = () => {
    const navigation = useNavigation();
    const sections = [
      { 
        id: '1', 
        title: 'Food Pairing', 
        content: [
          'These wines are light and low in alcohol with high acidity and a hint of sweetness. They are perfect as an aperitif and pair well with seafood, poultry, pork, veal, and fresh or washed rind cheese. Avoid pairing them with red meat or rich sauces. For Spätlese versions, blue and smoked cheese are a good match.',              
        ] 
      },
      { 
          id: '2', 
          title: 'Food Examples', 
          content: [
            ' Aperitif',  
            ' Grilled fish (sauce, if any, should be light)',  
            ' Fish Kebabs',  
            ' Smoked Fish',  
            ' Blackened Salmon (spicy)',  
            ' Chicken with Apricots',  
            ' Chicken with Paprika',  
            ' Tandoori Chicken',  
            ' Savory Chicken',  
            ' Roast Turkey – Cider Glazed',  
            ' Roast Pork Belly',  
            ' Veal Marsala (with sweet Marsala wine)',  
            ' Veal Piccata (sautéed with lemon, butter)',  
            ' Chili (not too hot)',  
            ' Pad Thai',  
            ' Thai Red Curry',  
            ' Thai Fish Cakes',  
            ' Onion Tart',  
            ' Fresh Salads with White Meat',  

          ] 
        },
        { 
          id: '3', 
          title: 'Cheese Examples', 
          content: [
            'Bavarian Blue',       
            'Cream Cheese',   
            'Epoisses',   
            'Goat Cheese',   
            'Grayson',   
            'Gruyére',   
            'Maytag Blue',   
            'Oka',   
            'Ricotta',   
            'Smoked Cheese',      
          ] 
        },
                
    ];
  
    return (
      <ImageBackground source={require('../assets/winery1.png')} style={styles.container}>
          <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate(item.route)}>
              <View style={styles.footer}>
                  <Text style={styles.link}>
                      <Link href="home">MENU</Link>
                  </Text>
              </View>
          </TouchableOpacity>
          <View style={styles.options}>
          {['Description', 'Regions', 'Food Pairing', 'Order'].map((option, index) => (
              <TouchableOpacity 
              key={index} 
              style={[
                  styles.option, 
                  option === 'Description' && styles.descriptionOption,
                  option === 'Regions' && styles.regionsOption,
                  option === 'Food Pairing' && styles.foodPairingOption,
                  option === 'Order' && styles.orderOption
              ]}
                            
              onPress={() => {
                if (option === 'Description') {
                  navigation.navigate('wineDescription');
                }else if (option === 'Regions') {
                  navigation.navigate('regions');
                }
              }}
            >
              <Text style={styles.optionText}>{option}</Text>
              
              </TouchableOpacity>
              
          ))}
          </View>
          <Text style={styles.title}>Riesling (kabinett & Spatlese)</Text>
          <ScrollView>
          
          {sections.map(section => (
              <View key={section.id} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {section.content.map((text, index) => (
                  <Text key={index} style={styles.sectionContent}>{text}</Text>
              ))}
              </View>
              
              
          ))}
          </ScrollView>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
      },
      options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      option: {
          backgroundColor: '#f5f5f5',
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
          //borderWidth: 1, 
          //borderColor: '#333', 
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        justifyContent: 'center',
        marginBottom: 15,
      },
      section: {
        marginBottom: 30,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
      },
      sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        marginBottom: 10,
      },
      sectionContent: {
        fontSize: 16,
        textAlign: 'justify',
        color: '#666',
      },
      optionText: {
        fontSize: 16,
        color: 'white',
      },
      descriptionOption: {
          backgroundColor: 'rgba(0, 0, 0, 0)', 
        },
        regionsOption: {
            backgroundColor: 'rgba(0, 0, 0, 0)', 
        },
        foodPairingOption: {
          backgroundColor: '#6750a4', 
        },
        orderOption: {
          backgroundColor: 'rgba(0, 0, 0, 0)', 
        },
        footer: {
          //flex: 1,
          justifyContent: 'flex-end',
          //backgroundColor: '#6750a4',
          //marginRight: 100,
          marginTop: 30,
        },
        link: {
          fontSize: 16,
          //backgroundColor: '#6750a4', 
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
          textAlign: 'left',
          //marginTop: 30,
         // marginVertical: 15,
        },
    });

    export default foodPairing;