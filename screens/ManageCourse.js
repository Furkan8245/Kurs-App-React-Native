import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react';
import Feather from '@expo/vector-icons/Feather';
import { useContext } from 'react';
import { CoursesContext } from '../store/coursesContext';
import { ToastAndroid } from 'react-native';

export default function ManageCourse({route,navigation}) {
  const coursesContext = useContext(CoursesContext);
  const courseId=route.params?.courseId;
  let isEditing=false;
  if(courseId)
  {
    isEditing=true;
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      title:isEditing ? 'Kursu Güncelle' : 'Kurs Ekle',
    });
  },[navigation,isEditing]);

  function deleteCourse(){
    coursesContext.deleteCourse(courseId);
    ToastAndroid.show("Seçtiğiniz kurs başarıyla silindi!", ToastAndroid.SHORT);
    navigation.goBack();
  }
  function cancelHandler(){
    navigation.goBack();
  }

  function addOrUpdateHandler(){
    if (isEditing) {
      coursesContext.updateCourse(courseId,{
        description:"Güncellenen Kurs",
        amount:200,
        date: new Date(),
      });
    ToastAndroid.show("Güncelleme Başarılı",ToastAndroid.SHORT);

    }
    else{
       coursesContext.addCourse({
        description:"Eklenen Kurs",
        amount:200,
        date: new Date(),
      });

      navigation.goBack();
      ToastAndroid.show("Ekleme Başarılı",ToastAndroid.SHORT);
    }
  }

  return (
    <View style={styles.container}>
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
                {isEditing ? 'Güncelle' : 'Ekle'}
              </Text>
            </View>
          </Pressable>
        </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
        <Feather name="trash" size={37} color="black" onPress={deleteCourse} />
      </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:24,
  },
  deleteContainer:{
    alignItems:'center',
    borderTopWidth:2,
    borderTopColor:'red',
    paddingTop:11,
    marginTop:16,
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
});