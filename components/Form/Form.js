import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';

export default function Form() {
    return (
            
            <KeyboardAvoidingView style={styles.form} behavior="padding" enabled>
                <TextInput 
                placeholder="Username"
                style={styles.input}/>
                <TextInput 
                placeholder="Password"
                style={styles.input}/>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        
      
    );
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 20,
        backgroundColor:  '#4C4B4B',
        width: Dimensions.get('window').width,
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
        textAlign: "center",
        borderRadius: 4, 
        margin: 16,  
     },
     buttonContainer: {
        backgroundColor: '#45CE30',
        width: Dimensions.get('window').width - 70,
        borderRadius: 4,
        borderWidth: 0,
        alignSelf: "center",
        justifyContent: "center",
        marginVertical: 16,
     },
     buttonText: {
        color: '#fff',
        padding: 10,
        textAlign: "center",
        fontSize: 16,
     }
});
