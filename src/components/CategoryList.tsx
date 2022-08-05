import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState,useEffect} from 'react'
import { FoodProps } from '../types/data'

const CategoryList: React.FC<FoodProps> = ({id, category}) => {
 
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => setCategorys(json))
    }, [])



  return (
    <View>
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categorys.map((item, index) => {
            return (
                <TouchableOpacity key={index}>
                    <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
            )
        }
        )}
    </ScrollView>
    </View>
  )
}

export default CategoryList

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: '#686F82',
        fontSize: 16,
        margin: 8,
        textTransform: 'capitalize',
    }
}
)


