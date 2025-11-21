import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Input from './Input'
import { useState } from 'react'


export default function CourseForm() {
    const [inputs,setInputs] = useState({
        amount:'',
        date:'',
        description:'',
    })
  
   
    function inputChange(inputIdentifier,enteredValue){
        setInputs((currentInputs)=>{
            return{
                ...currentInputs,
                [inputIdentifier]:enteredValue,
            }
        })
    }

 /*    function submitHandler(){
        console.log("---- Form Gönderildi ----");
        console.log("Miktar:",inputs.amount);
        console.log("Tarih:",inputs.date);
        console.log("Açıklama:",inputs.description);
        console.log("-----------------");
        

        
    } */
  return (
    <View style={styles.form}>
    <Text style={styles.courseInfo}>Kurs Bilgileri</Text>
    <View style={styles.priceAndDate}>
    <Input 
    style={styles.flexAll}
    label="Fiyat"
    textInputConfig={{
    keyboardType: 'numeric',
    onChangeText: inputChange.bind(this,'amount'),
    value:inputs.amount,
    }}
    />
    <Input 
     style={styles.flexAll}
    label="Tarih" 
    textInputConfig={{
    placeHolder:'YYYY-AA-GG',
    keyboardaType:'decimal-pad',
    maxLength:12,
   onChangeText: inputChange.bind(this,'date'),
    value:inputs.date,
    }}
    />
    </View>
   
    <Input 
    label="Başlık" 
    textInputConfig={{
    multiline:true,
   onChangeText: inputChange.bind(this,'description'),
    value:inputs.description,
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