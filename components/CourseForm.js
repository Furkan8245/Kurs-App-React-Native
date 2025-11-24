import { StyleSheet, Text, View, Pressable,Alert } from 'react-native'
import React, { useEffect } from 'react'
import Input from './Input'
import { useState } from 'react'
import { getFormattedDate } from '../helper/date';


export default function CourseForm({cancelHandler,buttonLabel,onSubmit,informationFill}) {
    const [inputs,setInputs] = useState({
        amount:{value :informationFill ? informationFill.amount.toString() : '', isValid:true},
        date: {value: informationFill ? getFormattedDate(informationFill.date): '', isValid:true},
        description: {value : informationFill ? informationFill.description : '', isValid:true} 
    });

    function addOrUpdateHandler(){
        const courseData = {
            amount:Number(inputs.amount.value),
            date: new Date(inputs.date.value),
            description: inputs.description.value,

        };
        const priceIsValid = courseData.amount > 0;
        const dateIsValid = courseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = courseData.description.trim().length > 0;

        if (!priceIsValid || !dateIsValid || !descriptionIsValid ) {
            setInputs((currentInputs)=>{
                return{
                    amount: {value:Number(currentInputs.amount.value), isValid:priceIsValid},
                    date: {value : currentInputs.date.value, isValid:dateIsValid},
                    description: {value: currentInputs.description.value, isValid:descriptionIsValid},
                }
            })
            return;
        }
        onSubmit(courseData);
    }
  
   
    function inputChange(inputIdentifier,enteredValue){
        setInputs((currentInputs)=>{
            return{
                ...currentInputs,
                [inputIdentifier]:{value:enteredValue, isValid:true},
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
    invalid={!inputs.amount.isValid}
    textInputConfig={{
    keyboardType: 'numeric',
    onChangeText: inputChange.bind(this,'amount'),
    value:inputs.amount.value,
    }}
    />
    <Input 
     style={styles.flexAll}
    label="Tarih" 
    invalid={!inputs.date.isValid}
    textInputConfig={{
    placeHolder:'YYYY-AA-GG',
    keyboardaType:'decimal-pad',
    maxLength:12,
   onChangeText: inputChange.bind(this,'date'),
    value:inputs.date.value,
    }}
    />
    </View>
   
    <Input 
    label="Başlık" 
    invalid={!inputs.description.isValid}
    textInputConfig={{
    multiline:true,
   onChangeText: inputChange.bind(this,'description'),
    value:inputs.description.value,
    }}
    />
    <View style={styles.errorMessage}>
      {!inputs.amount.isValid && (
      <Text>Lütfen tutarı doğru formatta giriniz.</Text>
    )}
    {!inputs.date.isValid && (
      <Text>Lütfen tarihi doğru formatta giriniz.</Text>
    )}
    {!inputs.description.isValid && (
      <Text>Lütfen başlığı doğru formatta giriniz.</Text>
    )}
    </View>
    
    <View style={styles.buttons}>
          <Pressable onPress={cancelHandler}>
            <View style={styles.cancel}>
              <Text style={styles.cancelText}>
                İptal Et
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={addOrUpdateHandler}>
            <View style={styles.addOrDelete}>
              <Text style={styles.addOrDeleteText}>
                {buttonLabel}
                
              </Text>
            </View>
          </Pressable>
        </View>
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
    buttons:{
    flexDirection:'row',
    justifyContent:'center',
  },
  cancel:{
    backgroundColor: '#d42c2cff',
  minWidth: 150,
  marginRight: 10,
  paddingHorizontal: 20,
  paddingVertical: 12, 
  alignItems: 'center',
  borderRadius: 8, 
  shadowColor: '#007AFF',
  shadowOffset: { width: 0, height: 4 }, 
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 6,
  },
  cancelText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addOrDelete:{
    backgroundColor: '#4CAF50',
  minWidth: 150,
  paddingHorizontal: 20,
  paddingVertical: 12,
  alignItems: 'center',
  borderRadius: 8,
  shadowColor: '#007AFF',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 6,
  },
  addOrDeleteText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorMessage:{
    alignItems:'center',
    marginBottom:12,

  },
});