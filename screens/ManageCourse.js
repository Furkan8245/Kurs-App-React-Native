import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react';
import Feather from '@expo/vector-icons/Feather';
import { useContext } from 'react';
import { CoursesContext } from '../store/coursesContext';
import { ToastAndroid } from 'react-native';
import CourseForm from '../components/CourseForm';

export default function ManageCourse({route,navigation}) {
  const coursesContext = useContext(CoursesContext);
  const courseId=route.params?.courseId;
  let isEditing=false;

  const selectedCourse = coursesContext.courses.find((course)=> course.id === courseId);

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

  function addOrUpdateHandler(courseData){
    if (isEditing) {
      coursesContext.updateCourse(courseId, courseData);
    ToastAndroid.show("Güncelleme Başarılı",ToastAndroid.SHORT);

    }
    else{
       coursesContext.addCourse(courseData);

      navigation.goBack();
      ToastAndroid.show("Ekleme Başarılı",ToastAndroid.SHORT);
    }
  }

  return (
    <View style={styles.container}>
      <CourseForm 
      buttonLabel={isEditing ? 'Güncelle' : 'Ekle'}
      cancelHandler={cancelHandler} 
      onSubmit={addOrUpdateHandler}
      informationFill={selectedCourse}
      />
        
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
  
});