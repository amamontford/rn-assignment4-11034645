import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const featuredJobs = [
  { id: '1', title: 'Software Engineer', company: 'Facebook', location: 'Accra, Ghana', salary: '$180,000', image: require('../assets/facebook.png'), backgroundColor: '#5386E4' },
  { id: '2', title: 'Data Scientist', company: 'Google', location: 'Florida, USA', salary: '$160,000', image: require('../assets/google.png'), backgroundColor: '#04284A' },
];

const FeaturedJobs = ({ title, company, location, salary, image, backgroundColor }) => (
  <View style={[styles.card, { backgroundColor }]}>
    <View style={styles.topContainer}>
      <View style={[styles.imageWrapper, company === 'Google' && styles.googleImageWrapper]}>
        <Image source={image} style={[styles.image, company === 'Google' && styles.googleImage]} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.company}>{company}</Text>
      </View>
    </View>
    <View style={styles.bottomContainer}>
      <Text style={styles.salary}>{salary}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginRight: 16,
    borderRadius: 12,
    width: 280,
    height: 160,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
  },
  googleImageWrapper: {
    padding: 0, 
    height: 50,
    width: 50,
  },
  image: {
    width: 38,
    height: 40,
    borderRadius: 20,
  },
  googleImage: {
    width: 60, // Increased size for Google image
    height: 60,
  },
  textContainer: {
    flex: 1,
    marginLeft: 8, // Added margin to align text with the right of the image
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left', // Changed alignment to left
  },
  company: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'left', // Changed alignment to left
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  location: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  salary: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'right', 
  },
});

export default FeaturedJobs;
