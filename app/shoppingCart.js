import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Modal, TouchableOpacity, TextInput, StyleSheet,  Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from "../firebaseConfig";
import { collection, onSnapshot, query, doc, updateDoc, addDoc } from 'firebase/firestore';
import { Link } from "expo-router";

const ShoppingCart = ({ route }) => {
  const [wines, setWines] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [newWine, setNewWine] = useState({
    Category: '',
    Name: '',
    Style: '',
    Type: '',
  });

  useEffect(() => {
    const q = query(collection(db, 'Wines'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newWines = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setWines(newWines);
    });

    return () => unsubscribe();
  }, []);

  const handlePress = (item) => {
    setSelectedItem(item);
    setEditedName(item.Name);
  };

  const handleSave = async () => {
    const winesRef = doc(db, 'Wines', selectedItem.id);
    await updateDoc(winesRef, { Name: editedName });

    setSelectedItem(null);
    setEditedName('');
  };

  const handleAdd = async () => {
    const winesRef = collection(db, 'Wines');
    await addDoc(winesRef, newWine);

    setNewWine({
      Category: '',
      Name: '',
      Style: '',
      Type: '',
    });
    setAddModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.Name}</Text>
    </TouchableOpacity>
  );

  const filteredWines = wines.filter(wine => 
    wine.Name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ImageBackground source={require('../assets/winery1.png')} style={styles.container}>
      <Text style={styles.title}>FOOD LIST </Text>      
      <TextInput
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
        placeholder="Search..."
      />
      <FlatList
        data={filteredWines}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
     <TouchableOpacity style={styles.addButton} onPress={() => setAddModalVisible(true)}>
      <Text style={styles.addButtonText}>Add Food</Text>
    </TouchableOpacity>
      <Text style={styles.link}>
          <Link href="home">GO TO MENU</Link>
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={selectedItem !== null}
        onRequestClose={() => setSelectedItem(null)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedItem && (
              <>
                <Text style={styles.modalTitle}>DETAILS</Text>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Name:</Text>
                  <TextInput
                    style={styles.input}
                    value={editedName}
                    onChangeText={setEditedName}
                  />
                </View>
                <View style={styles.detailContainer}>
                  <Text style={styles.detailLabel}>Category:</Text>
                  <Text style={styles.detailText}>{selectedItem.Category}</Text>
                </View>
                <View style={styles.detailContainer}>
                  <Text style={styles.detailLabel}>Style:</Text>
                  <Text style={styles.detailText}>{selectedItem.Style}</Text>
                </View>
                <View style={styles.detailContainer}>
                  <Text style={styles.detailLabel}>Type:</Text>
                  <Text style={styles.detailText}>{selectedItem.Type}</Text>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSave}
                >
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </>
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={() => setSelectedItem(null)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={addModalVisible}
        onRequestClose={() => setAddModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Add New Wine</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Category:</Text>
              <TextInput
                style={styles.input}
                value={newWine.Category}
                onChangeText={text => setNewWine(prevState => ({ ...prevState, Category: text }))}
              />
              <Text style={styles.inputLabel}>Name:</Text>
              <TextInput
                style={styles.input}
                value={newWine.Name}
                onChangeText={text => setNewWine(prevState => ({ ...prevState, Name: text }))}
              />
              <Text style={styles.inputLabel}>Style:</Text>
              <TextInput
                style={styles.input}
                value={newWine.Style}
                onChangeText={text => setNewWine(prevState => ({ ...prevState, Style: text }))}
              />
              <Text style={styles.inputLabel}>Type:</Text>
              <TextInput
                style={styles.input}
                value={newWine.Type}
                onChangeText={text => setNewWine(prevState => ({ ...prevState, Type: text }))}
              />
            </View>
            <Button title="Add" onPress={handleAdd} />
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
   title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    marginTop: 60,
    marginBottom: 40,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#007BFF', // Change this to your preferred color
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: '#FFFFFF', // Change this to your preferred color
    fontSize: 16,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'column', // Add this line
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    //flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  /*inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },*/
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#444',
  },
  itemDetails: {
    fontSize: 16,
    color: '#777',
  },
  itemLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  link: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
},
centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
},
modalView: {
  margin: 30,
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 90,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
modalTitle: {
  marginBottom: 15,
  textAlign: 'center',
  fontSize: 24,
  fontWeight: 'bold',
},
modalText: {
  marginBottom: 15,
  textAlign: 'center',
  fontSize: 18,
},
button: {
  backgroundColor: '#2196F3',
  borderRadius: 20,
  padding: 10,
  elevation: 2,
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},

inputLabel: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
},
input: {
  fontSize: 18,
  marginBottom: 10, 
  color: '#333',
  borderBottomWidth: 1,
  borderBottomColor: '#333',
  //flex: 1,
  textAlign: 'right',
},
detailContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
  width: '100%',
},
detailLabel: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
},
detailText: {
  fontSize: 18,
  color: '#333',
},
button: {
  backgroundColor: '#2196F3',
  borderRadius: 20,
  padding: 10,
  elevation: 2,
  marginTop: 20,
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
searchInput: {
  height: 60,
  borderColor: 'white',
  color: 'black', 
  borderWidth: 1,
  borderRadius: 10,
  paddingLeft: 10,
  paddingRight: 10,
  margin: 10,
},
});

export default ShoppingCart;