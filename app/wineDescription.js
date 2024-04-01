import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from "expo-router";


const wineDescription = () => {
    const navigation = useNavigation();
  const sections = [
    { 
      id: '1', 
      title: 'Description', 
      content: [
        'Riesling is a type of grape that is known for producing excellent white wines. However, it requires a significant amount of time to develop properly. It thrives in cooler climates and boasts both floral and fruity aromas. Its taste can range from bone dry to extremely sweet, so it\'s a good idea to consult with a knowledgeable retailer for advice. The alcohol level of Riesling can indicate its level of sweetness. German Rieslings are classified according to their sugar content. While it may require a bit of effort to fully appreciate, the end result is definitely worth it.',        
        
      ] 
    },
    { 
        id: '2', 
        title: 'Body', 
        content: [
          'Light and delicate with a low level of alcohol.',
          
        ] 
      },
      { 
        id: '3', 
        title: 'Dry/Sweet', 
        content: [
          'Generally medium-dry (sweet to taste) but can also be dry – check label or ask retailer. Alcohol level can be a good indicator – see note below.',
          
        ] 
      },
      { 
        id: '4', 
        title: 'Acidity', 
        content: [
          'High.',
          
        ] 
      },
      { 
        id: '5', 
        title: 'Age', 
        content: [
          'Requires about five years of bottle age to develop properly.',
          
        ] 
      },
      { 
        id: '6', 
        title: 'Other', 
        content: [
          'Something of an acquired taste – exposure is needed to appreciate its qualities. Tends to be relatively low in alcohol..',
          
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
            >
            <Text style={styles.optionText}>{option}</Text>
            
            </TouchableOpacity>
        ))}
        </View>
        <ScrollView>
        <Text style={styles.title}>Riesling (kabinett & Spatlese)</Text>
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
      marginBottom: 30,
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
      color: '#333',
      marginBottom: 10,
    },
    sectionContent: {
      fontSize: 16,
      color: '#666',
    },
    optionText: {
      fontSize: 14,
      color: 'white',
    },
    descriptionOption: {
        backgroundColor: '#6750a4', 
      },
      regionsOption: {
        backgroundColor: 'rgba(0, 0, 0, 0)', 
      },
      foodPairingOption: {
        backgroundColor: 'rgba(0, 0, 0, 0)', 
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

export default wineDescription;