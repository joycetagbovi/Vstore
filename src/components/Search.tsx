import { View, StyleSheet, TextInput, Image ,Text} from 'react-native'
import React, {useState} from 'react'
import {  Flex } from "@react-native-material/core";

const Search = () => {

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchHandler = (text: any) => {
        setSearch(text);
        console.log(text);
    }

  return (
    <View>
      <Flex m={10} direction='row' center justify='center'>
      <TextInput 
        style={styles.input}
         onChangeText={searchHandler}
         value={search}
         placeholder="Find your dishes"
         placeholderTextColor="#686F82"
     />
      <Image source={require('../../assets/Filter.png')} 
        resizeMode="stretch"
        style={{position: 'absolute', 
        right: 30,
        top: 30,
        width: 15.9,
        height: 15.9,}} 
       />
        <Text>{Search}</Text>
        </Flex>
       
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    input: {
      height: 52,
      backgroundColor: '#A9C7C91F',
      borderRadius: 19,
      margin: 12,
      padding: 20,
      width: 330,
    
    },
  });