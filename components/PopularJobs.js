import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export const popularJobs = [
  { id: '1', title: 'Jr Executive', company: 'Burger King', location: 'Los Angeles, US', salary: '$96,000/y', image: require('../assets/burgerking.png') },
  { id: '2', title: 'Product Manager', company: 'Beats', location: 'Florida, US', salary: '$84,000/y', image: require('../assets/beats.png') },
  { id: '3', title: 'Product Manager', company: 'Facebook', location: 'Florida, US', salary: '$86,000/y', image: require('../assets/facebook.png') },
  { id: '4', title: 'Marketing Specialist', company: 'Facebook', location: 'New York, US', salary: '$90,000/y', image: require('../assets/burgerking.png') },
  { id: '5', title: 'Software Developer', company: 'Beats', location: 'Austin, US', salary: '$95,000/y', image: require('../assets/beats.png') },
  { id: '6', title: 'Operations Manager', company: 'Burger King', location: 'Miami, US', salary: '$88,000/y', image: require('../assets/burgerking.png') },
  { id: '7', title: 'UX/UI Designer', company: 'Facebook', location: 'San Francisco, US', salary: '$100,000/y', image: require('../assets/facebook.png') },
  { id: '8', title: 'Project Manager', company: 'Beats', location: 'Seattle, US', salary: '$92,000/y', image: require('../assets/beats.png') },
];

const JobCard = ({ title, company, location, salary, image }) => (
  <View style={styles.jobCard}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
      <View style={styles.leftTextContainer}>
        <Text style={styles.jobTitle}>{title}</Text>
        <Text style={styles.jobCompany}>{company}</Text>
      </View>
      <View style={styles.rightTextContainer}>
        <Text style={styles.jobSalary}>{salary}</Text>
        <Text style={styles.jobLocation}>{location}</Text>
      </View>
    </View>
  </View>
);

const PopularJobs = () => {
  const renderItem = ({ item }) => (
    <JobCard
      title={item.title}
      company={item.company}
      location={item.location}
      salary={item.salary}
      image={item.image}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={popularJobs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.jobsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  jobsList: {
    paddingBottom: 20,
  },
  jobCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftTextContainer: {
    flexDirection: 'column',
  },
  rightTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  jobCompany: {
    fontSize: 14,
    color: '#888',
  },
  jobLocation: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
  jobSalary: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'right',
  },
});

export default PopularJobs;
