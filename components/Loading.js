import React from "react";
import { StyleSheet, Text, View} from "react-native";

export const Loading = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Weather loading...</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDF6AA'
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30,
    }
})