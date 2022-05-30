import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from "axios";
import { useState, useEffect } from "react";
import Weather from "./components/Weather";
import { Loading } from './components/Loading';



const API_KEY = 'f739f28ce29620a1b7553eeea245a11b'

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(0);
  const [condition, setConditon] = useState('')

  const getWeather = async (latitude, longitude) => {
    try {
      const { data } = await axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      return data;
    } catch (e) {
      Alert.alert('Something went wrong', 'so sad(')
    }
  }

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude} } = await Location.getCurrentPositionAsync();
      const data = await getWeather(latitude, longitude)
      setIsLoading(false);
      setTemp(temp => data.main.temp);
      setConditon(condition => data.weather[0].main)
    } catch (e){
      Alert.alert('Can not find location', 'so sad(')
    }

  }

  useEffect(() => {
    getLocation();
  }, [])


  const loading = isLoading ? <Loading /> : <Weather temp={temp} condition={condition} />;
  return loading;
};

export default App;
