import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ name, email }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Header;
