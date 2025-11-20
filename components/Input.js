import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function Input({label,textInputConfig,style}) {
    const inputStyles = [styles.textInputCnt];
    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }
  return (
    <View style={[styles.inputContainer,style]}>
      <Text style={styles.labelCnt}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginVertical:11,
        marginHorizontal:5,
    },
    labelCnt:{
        fontSize:16,
        marginBottom:5,
        color:'black',
        fontWeight:'bold',
    },
    textInputCnt:{
        backgroundColor:'#ceacc6ff',
    },
    inputMultiline:{
        minHeight:100,
        textAlignVertical:'top',
        paddingTop:8,
        paddingHorizontal:8,
    }
})