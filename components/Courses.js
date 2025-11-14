import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoursesSummary from './CoursesSummary';
import CoursesList from './CoursesList';


const COURSES = [
  {
    id: '1',
    description: 'C Programlama',
    amount: 69,
    date: new Date('2023-01-05')
  },
  {
    id: '2',
    description: 'Python ile Veri Analizi',
    amount: 69,
    date: new Date('2023-02-12')
  },
  {
    id: '3',
    description: 'JavaScript Temelleri',
    amount: 69,
    date: new Date('2023-03-08')
  },
  {
    id: '4',
    description: 'React Native Geliştirme',
    amount: 69,
    date: new Date('2023-04-15')
  },
  {
    id: '5',
    description: 'Go ile Backend Geliştirme',
    amount: 69,
    date: new Date('2023-05-22')
  },
  {
    id: '6',
    description: 'Kotlin ile Android',
    amount: 69,
    date: new Date('2023-06-18')
  },
  {
    id: '7',
    description: '.NET Core Web API',
    amount: 69,
    date: new Date('2023-07-30')
  },
  {
    id: '8',
    description: 'Veritabanı Yönetimi (SQL)',
    amount: 69,
    date: new Date('2023-08-25')
  },
  {
    id: '9',
    description: 'Yapay Zeka Giriş',
    amount: 69,
    date: new Date('2023-09-10')
  },
  {
    id: '10',
    description: 'Siber Güvenlik Temelleri',
    amount: 69,
    date: new Date('2023-10-05')
  }
]

export default function Courses({coursesPeriod}) {
  return (
    <View style={styles.container}>
    <CoursesSummary courses= {COURSES}  periodName={coursesPeriod} />
    <CoursesList courses={COURSES} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 20
    } 
});