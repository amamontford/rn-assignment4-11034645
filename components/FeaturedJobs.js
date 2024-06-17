import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export const featuredJobs = [
  { id: '1', title: 'Software Engineer', company: 'Facebook', location: 'Accra, Ghana', salary: '$180,000', image: require('../assets/facebook.png'), backgroundColor: '#5386E4' },
  { id: '2', title: 'Data Scientist', company: 'Google', location: 'Florida, USA', salary: '$160,000', image: require('../assets/google.png'), backgroundColor: '#04284A' },
  { id: '3', title: 'Product Manager', company: 'Facebook', location: 'Cupertino, USA', salary: '$200,000', image: require('../assets/facebook.png'), backgroundColor: '#1877F2' },
  { id: '4', title: 'UX Designer', company: 'Google', location: 'Seattle, USA', salary: '$140,000', image: require('../assets/google.png'), backgroundColor: '#4285F4' },
  { id: '5', title: 'DevOps Engineer', company: 'Facebook', location: 'New York, USA', salary: '$150,000', image: require('../assets/facebook.png'), backgroundColor: '#4267B2' },
  { id: '6', title: 'Data Analyst', company: 'Google', location: 'Los Gatos, USA', salary: '$130,000', image: require('../assets/google.png'), backgroundColor: '#0F9D58' },
  { id: '7', title: 'Security Engineer', company: 'Facebook', location: 'Palo Alto, USA', salary: '$170,000', image: require('../assets/facebook.png'), backgroundColor: '#3b5998' },
  { id: '8', title: 'Full Stack Developer', company: 'Google', location: 'San Francisco, USA', salary: '$155,000', image: require('../assets/google.png'), backgroundColor: '#DB4437' },
];

const FeaturedJobs = () => (
  <ScrollView horizontal style={styles.container}>
    {featuredJobs.map(job => (
      <View key={job.id} style={[styles.card, { backgroundColor: job.backgroundColor }]}>
        <View style={styles.topContainer}>
          <View style={[styles.imageWrapper, job.company === 'Google' && styles.googleImageWrapper]}>
            <Image source={job.image} style={[styles.image, job.company === 'Google' && styles.googleImage]} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{job.title}</Text>
            <Text style={styles.company}>{job.company}</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.salary}>{job.salary}</Text>
          <Text style={styles.location}>{job.location}</Text>
        </View>
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
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
    padding: 4,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  googleImage: {
    width: 60,
    height: 60,
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
  },
  company: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'left',
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
