import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getFormattedDate } from '../helper/date'

export default function CourseItem({amount,date,id,description}) {
  return (
    <Pressable>
      <View style={styles.courseContainer}>
      <View >
        <Text  style={styles.description}>{description}</Text>
      <Text>{getFormattedDate(date)}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{amount}</Text>
      </View>
    </View>
    </Pressable>
    
  )
}

const styles = StyleSheet.create({
  courseContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:5,
    backgroundColor:'#d3d3d3',
    padding:10,
    borderRadius:20,
    elevation:4,
    shadowColor:'#000',
    shadowRadius:5,
    shadowOffset:{width:1,height:1},
    shadowOpacity:0.4,

  },
  description:{
    fontSize:15,
    fontWeight:'bold',
    color:'#000',
  },
  priceContainer:{
    backgroundColor:'#000',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'flex-start',

  },
  price:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16,
  }
})