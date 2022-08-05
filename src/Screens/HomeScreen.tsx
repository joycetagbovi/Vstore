import { View, Text, StyleSheet, SafeAreaView,  FlatList, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react'
import {  Flex  } from "@react-native-material/core";
import { FoodProps } from '../types/data';

import CategoryList from '../components/CategoryList';
import Card from '../components/Card'
import Search from '../components/Search';
import Header from '../components/Header';

const HomeScreen = () => {
 
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setPosts(json))
  }, [])

  
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Flex m={10}>
      <Text style={styles.text}>Find your suitable product now. </Text>
      </Flex>
      <Search />
      <CategoryList />
      <Flex m={10}  >
       <FlatList 
       numColumns={2}
       showsVerticalScrollIndicator={false}
       data={posts as FoodProps[]}
       renderItem={({item}) => {
          return (
          <Card title={item.title} image={item.image} price={item.price}  />
          )
       }
      }
        keyExtractor={item => item.id.toString()}
       />
    
      </Flex>
     
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F6F7FC',  
    marginHorizontal: 8,
  },
  text: {
    color: '#1B153D',
    fontSize: 26,
    fontFamily: 'Raleway_500Medium',
    width: 300,
    textAlign: 'left',
  },
 
})