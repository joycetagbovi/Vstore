import { View, Text, Image } from 'react-native'
import { Avatar } from '@react-native-material/core'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


const Header = () => {
  return (
    <View style={{
        flexDirection:"row",
        justifyContent: "space-between",
        margin: 10,
    }}>
     <AntDesign name="menuunfold" size={22} color="#201F20" />
        <Avatar
        size={40}
          image={
            <Image
              source={require('../../assets/41.png')}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 28,
                width: 40,
                height: 40,
              }}
            />
          }
        />
    </View>
  )
}

export default Header