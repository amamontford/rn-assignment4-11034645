import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Jobizz</Text>
          <Text style={styles.subtitle}>Welcome Back 👋</Text>
          <Text style={styles.description}>Let's log in. Apply to jobs!</Text>
          <TextInput
            style={[styles.input, styles.inputMarginTop]}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
            <Text style={styles.separatorText}>Or continue with</Text>
            <View style={styles.separatorLine} />
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/icons.png')} style={styles.iconsImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.registerText}>
              <Text style={styles.haventAccountText}>Haven’t an account? </Text>
              <Text style={styles.registerLink}>Register</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'flex-start',
    padding: 20,
    paddingTop: 60, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#356899', 
    paddingHorizontal: 10, 
    paddingVertical: 5,
    borderRadius: 5, 
  },
  subtitle: {
    fontSize: 20,
    marginTop: 10,
    color: '#333',
    fontWeight: 'bold', 
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
    color: '#AFB0B6', 
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  inputMarginTop: {
    marginTop: 20,
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#356899',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#AFB0B6', 
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
    marginTop: 10, 
  },
  iconsImage: {
    width: 240, 
    height: 50,
  },
  textContainer: {
    width: '100%', 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50, 
  },
  registerText: {
    fontSize: 16,
    color: '#333',
  },
  haventAccountText: {
    color: '#AFB0B6', 
  },
  registerLink: {
    color: '#356899',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
