import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { FoodProps } from '../types/data';
import { Box,Flex, ListItem } from "@react-native-material/core";
import { FontAwesome } from '@expo/vector-icons'



const Card: React.FC<FoodProps> = ({title,image,price})  => {
  

  return (
  
       <Flex
       w={163}
       h={220} 
       m={5}
      
       style=
       {{ 
        backgroundColor: "#A9C7C91F", 
        borderRadius: 26,
        }} > 
            <Flex mb={5}>
            <Image
            source={{uri: image}}
            resizeMode="cover"
            style={{
                width: '100%',
                height: 130,
                
            }}  />
            </Flex>
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              padding: 10,
            }}>
              <Text style={styles.text}>{title.substring(0, 9)}</Text>
              <Text style={styles.text}>{price}</Text>
         </View>
         <Flex direction='row' p={10}>
           <FontAwesome name="star" size={10} color="#Fff" />
           <FontAwesome name="star" size={10} color="#Fff" />
           <FontAwesome name="star" size={10} color="#Fff" />
           <FontAwesome name="star" size={10} color="#Fff" />
           <FontAwesome name="star" size={10} color="#898B8B" />
         </Flex>
        </Flex>
       
    
  )
}

export default Card

const styles = StyleSheet.create({

  text :{
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Raleway_500Medium',
   
  }
})

