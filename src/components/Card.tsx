import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import { FoodProps } from '../types/data';
import { Flex } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';


const Card: React.FC<FoodProps> = ({title,image,price, id, description })  => { 

  const navigation = useNavigation(); 
  return (
      <TouchableOpacity onPress={() => (navigation.navigate('product',{ title, image, price, id,description}))}>
       <View style={styles.card}> 
          {id}
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
              <Text style={styles.text}>{title.toString()}</Text>
              <Text style={styles.text}>{price}</Text>
         </View>
        </View>
        </TouchableOpacity>
       
    
  )
}

export default Card

const styles = StyleSheet.create({

  card: {
    width: 163,
    height: 220,
    backgroundColor: "#fff",
    borderRadius: 14,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  text :{
    color: '#1B153D',
    fontSize: 16,
    fontFamily: 'Raleway_500Medium',
   
  }
})

