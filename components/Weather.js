import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

// const weatherOptions = {
//     Thunderstorm: {
//         iconName: 'weather-lightning',
//         gradient: ['#141E30', '#243B55']
//     },
//     Drizzle: {
//         iconName: 'weather-rainy',
//         gradient: ['#3a7bd5', '#3a6073']
//     },
//     Rain: {
//         iconName: 'weather-pouring',
//         gradient: ['#000046','#1CB5E0']
//     },
//     Snow: {
//         iconName: 'snowflake',
//         gradient: ['#83a4d4', '#b6fbff']
//     },
//     Dust: {
//         iconName: 'weather-windy-variant',
//         gradient: ['#B79891', '#94716B']
//     },
//     Smoke: {
//         iconName: 'weather-windy',
//         gradient: ['#56CCF2', '#2F80ED']
//     },
//     Haze: {
//         iconName: 'weather-hazy',
//         gradient: ['#3E5151', '#DECBA4']
//     },
//     Mist: {
//         iconName: 'weather-fog',
//         gradient: ['#606c88', '#3f4c6b']
//     },
//     Clear: {
//         iconName: 'weather-sunny',
//         gradient: ['#56CCF2', '#2F80ED']
//     },
//     Clouds: {
//         iconName: 'cloud',
//         gradient: ['#757F9A', '#D7DDE8']
//     },
// }

const Weather = ({temp, condition}) => {

  const temperature = Math.round(temp);

  return (
      <LinearGradient
          colors={['#141E30', '#243B55']}
          style={styles.container}>
          <View style={styles.halfContainer}>
              <Ionicons name={'cloud'} size={96} color="white" />
              <Text style={styles.temp}>{temperature}°</Text>
          </View>
          <View style={styles.halfContainer}>
              <Text style={styles.textStyle}>Condition: {condition} </Text>
          </View>
      </LinearGradient>
  );
};

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.string.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: 'white',
    },
    textStyle: {
        fontSize: 30,
        color: 'white',
    }
})

export default Weather;