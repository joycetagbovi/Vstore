import { View, StyleSheet, TextInput, Image ,Text} from 'react-native'
import  {useContext,useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Props } from '../types/data';
import { Store } from '../hooks/Store';


const Search: React.FC<Props> = ({term,onhandleChange}:Props) => {

  const {state,dispatch  } = useContext(Store);
  


  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', }}>
        <View style={{position: 'absolute', left:30 }}>
       <Ionicons name="ios-search" size={24} color="#1B153D" />
        </View>
      <TextInput 
        style={styles.input}
         onChangeText={(text:any) => onhandleChange(text)}
         value={term}
         placeholder="Search Products"
         placeholderTextColor="#686F82"
        
     />
     
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    input: {
      height: 59,
      backgroundColor: '#A9C7C91F',
      borderRadius: 19,
      margin: 12,
      padding: 20,
      width: 340,
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'Raleway_500Medium',
    
    },
  });