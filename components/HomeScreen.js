import React from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, Image, TextInput, Text } from 'react-native';
import FeaturedJobs, { featuredJobs } from './FeaturedJobs';
import PopularJobs from './PopularJobs';
import Header from './Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Header Section */}
        <View style={styles.section}>
          <Header name="Eric Atsu" email="eric@gmail.com" />
        </View>
        
        {/* Search Bar Section */}
        <View style={styles.searchWrapper}>
          <View style={styles.searchContainer}>
            <Image source={require('../assets/search.png')} style={styles.searchIcon} />
            <TextInput style={styles.searchInput} placeholder="Search a job or position" />
          </View>
          <View style={styles.filterContainer}>
            <Image source={require('../assets/filter.png')} style={styles.filterIcon} />
          </View>
        </View>

        {/* Featured Jobs Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <View style={styles.section}>
          <FlatList
            data={featuredJobs}
            renderItem={({ item }) => <FeaturedJobs {...item} />}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardsContainer}
          />
        </View>

        {/* Popular Jobs Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Jobs</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <View style={styles.section}>
          <PopularJobs />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Changed to white
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF', // Changed to white
  },
  section: {
    marginVertical: 10,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 49,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FBF9F7',
    backgroundColor: '#F2F2F3', // Changed background color
    paddingHorizontal: 10,
    marginRight: 10, // Added margin to separate the filter container
  },
  searchIcon: {
    width: 20, 
    height: 20, 
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    paddingLeft: 10,
    borderRadius: 14,
  },
  filterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F3', // Changed background color
    borderRadius: 10, // Adjust border radius if needed
  },
  filterIcon: {
    width: 45,
    height: 45, 
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#356899',
  },
  cardsContainer: {
    paddingRight: 16,
  },
});

export default HomeScreen;
