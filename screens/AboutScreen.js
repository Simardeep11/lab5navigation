import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  const currentDateString = new Date().toLocaleDateString(); // Gets the current date in a readable format

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>About the App</Text>
        <Text style={styles.paragraph}>This app was developed by Simrandeep Kaur.</Text>
        <Text style={styles.paragraph}>Current date: {currentDateString}</Text>
        <View style={styles.buttonContainer}>
          <Button title='Go to Home Page' onPress={() => navigation.navigate('Home')} color="white"/>
        </View>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
  },
  buttonContainer: {
    marginHorizontal: 16,
    marginTop: 24,
    backgroundColor: "orange",
    borderRadius: 6,
  },
});

export default AboutScreen;
