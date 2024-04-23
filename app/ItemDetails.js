import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const ItemDetails = ({ route }) => {
  const [item, setItem] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, 'Wines', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.Name}</Text>
      <Text style={styles.label}>Category:</Text>
      <Text style={styles.detail}>{item.Category}</Text>
      <Text style={styles.label}>Style:</Text>
      <Text style={styles.detail}>{item.Style}</Text>
      <Text style={styles.label}>Type:</Text>
      <Text style={styles.detail}>{item.Type}</Text>
    </View>
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
    color: '#333',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 10,
  },
  detail: {
    fontSize: 16,
    color: '#777',
  },
});

export default ItemDetails;