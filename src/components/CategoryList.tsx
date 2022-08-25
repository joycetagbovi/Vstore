import { View, Text,  TouchableOpacity, StyleSheet,ScrollView } from 'react-native'
import  {useContext} from 'react'
import { FoodProps } from '../types/data'
import { Store } from '../hooks/Store'


const CategoryList: React.FC<FoodProps> = ({id, category}) => {
   const {state, dispatch } = useContext(Store);

   const categoryFilter =  (categorys: any) => {
    const filterData = state.posts.filter((item: any) => {
        return item.category === categorys; 
    }
    );
    dispatch({type: 'FETCH-SUCCESS', payload: filterData});
    dispatch({type: 'CATEGORY-SUCCESS', payload: categorys});
   console.log(filterData)
   
} 

  return (
    <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
     {
       state.posts.map((item: any) => {
         return (
          <TouchableOpacity onPress={() =>  categoryFilter(item.category) }>
          <Text style={styles.text} key={id}>{item.category}</Text>
       </TouchableOpacity>
         )
       }
       )
     }
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
        fontFamily: 'Raleway_500Medium',
    }
})


