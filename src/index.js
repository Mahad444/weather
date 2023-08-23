import { View, Text , StyleSheet, Alert } from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react'
import Constants from 'expo-constants'
import WeatherInfo from './Weatherinfo'

const API_KEY = '538790614e49de264c138e8b16c5e821';
const Wearther = () => {
    //checking if the weather data is fetched right
    const [weartherData, setWeartherData] = useState(null);
    //checking if the weather data is loading or not
    const [isLoading, setIsLoading] = useState(false);

    //fetching the weather data function from the API
    const fetchWeatherData = async (cityName) => {
        try {
            setIsLoading(false);
            if (response.status === 200 ) {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metrics`);
                // const response = await fetch(`https://accuweatherstefan-skliarovv1.p.rapidapi.com/getAlertsByLocationKey=${cityName}&appid${API_KEY}$units`);
                const data = await response.json();
                if (data.cod === 200) {
                    setWeartherData(data);
                } else {
                    setWeartherData(null);
            }
            setIsLoading(false);
        }
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

        // remember my city name and show it on the screen when the app is opened
        useEffect(() => {
            fetchWeatherData('Nairobi');
        }, []);
 // checking if the weather data is loading or not and if it is loading show the loading indicator
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#F44336" />
                </View>
            );
        }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wearther App</Text>
      </View>
      <WeatherInfo weartherData={weartherData} />
    </View>
  )
}

export default Wearther

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCF5D8',
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        backgroundColor: '#C5D2EF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    headerTitle: {
        fontSize: 29,
        fontWeight: 'bold',
    },
});





















 // const response = await fetch(`https://AccuWeatherstefan-skliarovV1.p.rapidapi.com=${cityName}&appid${API_KEY}$units`);
