import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../Images/lcologo.png')}  
                style={styles.logo}/>
            </View>
            <Text style={styles.text}>Intuitive Design</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: .8,
        backgroundColor: '#4C4B4B',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        marginTop: 80,
        height: 120,
        width: 120,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        padding: 5,
    }
});
