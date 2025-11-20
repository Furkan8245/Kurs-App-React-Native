import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'

export default function CourseForm() {
  return (
    <View style={styles.form}>
    <Text style={styles.courseInfo}>Kurs Bilgileri</Text>
    <View style={styles.priceAndDate}>
    <Input 
    style={styles.flexAll}
    label="Fiyat"
    textInputConfig={{
    keyboardType: 'numeric',
    onChangeText:()=>{}
    }}
    />
    <Input 
     style={styles.flexAll}
    label="Tarih" 
    textInputConfig={{
    placeHolder:'YYYY-AA-GG',
    keyboardaType:'decimal-pad',
    maxLength:12,
    onChangeText:()=>{}
    }}
    />
    </View>
   
    <Input 
    label="Başlık" 
    textInputConfig={{
    multiline:true,
    onChangeText:()=>{}
    }}
    />
  </View>
  );
  
  
}

const styles = StyleSheet.create({
    priceAndDate:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    flexAll:{
        flex:1,
    },
    form:{
        marginTop:35,
    },
    courseInfo:{
        fontSize:23,
        fontWeight:'bold',
        color:'#cd3939ff',
        textAlign:'center',
        marginBottom:15,
        marginVertical:11,
    },
});