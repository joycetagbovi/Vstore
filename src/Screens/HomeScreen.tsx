import { View, Text, StyleSheet, SafeAreaView,  FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { HStack, Wrap, Flex,  } from "@react-native-material/core";
import { FoodProps } from '../types/data';


import Card from '../components/Card'
import Search from '../components/Search';

const HomeScreen = () => {
 
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setPosts(json))
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <Flex m={10}>
      <Text style={styles.text}> Enjoy Your Meal with </Text>
      <Text style={{fontSize: 28, fontFamily:'Raleway_500Medium', color:'#fff'}}> Your Favourite Food  </Text>
      </Flex>
      <Search />
      <Flex m={10}  >
       <FlatList 
       numColumns={2}
       data={posts as FoodProps[]}
       renderItem={({item}) => (
          <Card 
           title={item.title} 
           image={item.image} 
           price={item.price}

           />
       )}
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
    padding: 20,
    backgroundColor: '#2B2B2B',  
  },
  text: {
    color: '#FFFFFFB2',
    fontSize: 20,
    fontFamily: 'Raleway_500Medium',
  },
 
})