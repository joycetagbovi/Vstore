import { View, Text, StyleSheet, SafeAreaView,  FlatList, ScrollView,TouchableOpacity, TextInput} from 'react-native'
import React, {  useContext, useState, useEffect} from 'react'
import {  Flex } from "@react-native-material/core";
import { Store } from '../hooks/Store';
import CategoryList from '../components/CategoryList';
import Card from '../components/Card'
import Search from '../components/Search';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();
  const {state, dispatch } = useContext(Store);

  useEffect(() => {
    const fetchData = async () => {
        try {
     const response = await axios.get('https://fakestoreapi.com/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
        } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: (error as Error).message });
        }
    }  
    fetchData();   
} , []);




const [term, setTerm] = useState('');

 const onhandleChange = (name: any) => {
    
    const newData = state.posts.filter((item: any) => {
        const itemData = `${item.title.toUpperCase()}`;
        const textData = name.toUpperCase();
        return itemData.indexOf(textData) > -1;
      }
      );
      setTerm(name);
      
      dispatch({type: 'FETCH-SUCCESS', payload: newData});
      console.log(newData)
      console.log(dispatch({type: 'SEARCH-SUCCESS', payload: newData}))
  }


  

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Flex m={10}>
      <Text style={styles.text}>Find your suitable product now. </Text>
      </Flex>
      <Search  
         terms={term}
         onhandleChange={(text: any) => onhandleChange(text)}
      />
       <CategoryList />
      <Flex m={10}  >    
       <FlatList 
       numColumns={2}
       showsVerticalScrollIndicator={false}
       data={state.posts}  
       renderItem={({item}) => {
          return (
          <Card title={item.title} image={item.image} price={item.price} key={item.id} category={item.category} description={item.description}/>
          )
       }
      }
        keyExtractor={item => item.id}
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
  text2: {
    color: '#686F82',
        fontSize: 16,
        margin: 8,
        textTransform: 'capitalize',
        fontFamily: 'Raleway_500Medium',
    },
})