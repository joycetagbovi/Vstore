import { View, Text,SafeAreaView, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Flex, } from '@react-native-material/core'
import { AntDesign,MaterialIcons  } from '@expo/vector-icons';



const ProductDetails = ({route,navigation}: any) => {
    const {title,image,price,description,id } = route.params;
  
  return (
    <SafeAreaView style={styles.container}>
        <Flex>
            {id}
        <View  style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              padding: 10,
            }}>
        <AntDesign 
        onPress={() => navigation.goBack()}
        name="arrowleft" size={24} c
        olor="black" />
        <MaterialIcons name="favorite-outline" size={24} color="black" />
        </View>
        <Flex m={5}>
        <Image
        source={{uri: image}}
        resizeMode="cover"
        style={{
            width: '100%',
            height: 311,
        }}
        />
        </Flex>
        <View style={styles.details}>
        <Text style={styles.text}>{title}</Text>
        <Text style={{
            fontSize: 24,
            fontWeight: "500",
            color: "#5B41FF",
        }}>
        ${price}
        </Text>
        <Text style={styles.desc}>{description}</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        </View>
       
        </Flex>
        
        </SafeAreaView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#Fff',  
        // marginHorizontal: 8,
      },
      details:{
        flexDirection: "column",
        backgroundColor: "#FCFCFF",
        borderRadius: 14,
        padding: 20,
        height: 423,
        width:375,
        position: 'absolute',
        top: 389,
        left: 0,
        shadowColor: "rgba(23, 20, 57, 0.03)",
        shadowOffset: {
            width: 0,
            height: 35,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
      },
    text :{
        color: '#1B153D',
        fontSize: 20,
        fontFamily: 'Raleway_500Medium',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    desc:{
        fontSize: 14,
        lineHeight:22,
        letterSpacing:0.03,
        color: '#9095A6',
        fontFamily: 'Raleway_500Medium',
        marginTop: 10,
    },
    button:{
     width: 335,
     height: 71,
     backgroundColor:'#8743FF',
     alignItems:'center',
     borderRadius: 10,
     justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 10,
    },
    buttonText: {
        fontSize:20,
        lineHeight:23,
        fontFamily:'Raleway_500Medium',
        color:'#fff',
      
       
    }
    
}
)