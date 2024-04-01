import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from "expo-router";

const Regions = () => {
    const navigation = useNavigation();
    const sections = [
      { 
        id: '1', 
        title: 'Germany', 
        content: [
          'Germanys Mosel-Saar-Ruwer region produces some of the worlds finest medium-dry Riesling wines. The vineyards hug the steep, mineral-rich slopes along the river banks, making mechanical harvesting impossible. These wines are delicate and light, with a unique beauty and mineral-rich flavor. Seek out single-estate wines from famous villages for the highest quality. In Germany, medium-dry wine is known as halbtrocken.',              
        ] 
      },
      { 
          id: '2', 
          title: 'Alsace, France', 
          content: [
            'The region of Alsace takes great pride in its Riesling grape variety, which is the most commonly grown in the area. Although most Alsace Rieslings are dry and crisp, there are some exceptional medium-dry options available. However, it is important to note that the label may not always specify the wine is sweetness level, so it is worth checking with your supplier. Generally, a lower alcohol content indicates a medium-dry wine.',          
          ] 
        },
        { 
          id: '3', 
          title: 'Cooler Regions, USA', 
          content: [
            'Although Riesling grown in North America maintains good acidity, the warmer climate in California results in a higher alcohol content and richer fruit than those grown in Europe. The best regions for Riesling are the cooler areas such as Anderson Valley in Mendocino County, California, Finger Lakes in New York State, and Columbia Valley in Washington.',          
          ] 
        },
        { 
          id: '4', 
          title: 'Niagara Peninsula, Canada', 
          content: [
            'Niagara Peninsula in Ontario is Canada is top viticulture region for cool climate grape varieties like Riesling. They produce all types of Riesling, including their famous sweet icewines. The region is off-dry or medium-dry aromatic wines are also impressive.',          
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
          backgroundColor: '#6750a4', 
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

export default Regions;