import { View, Text,SafeAreaView,Image,Dimensions,StyleSheet } from 'react-native'
import React from 'react'

const WeatherInfo = ({weartherData}) => {
    const {
        name,
        visibility,
        weather: [icon, description],
        main: { temp},
        // wind: { speed }, 
 } = weartherData
  return (
      <SafeAreaView style={styles.container}>
        <View style={{alignItems:'center'}}>
            <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.logo}>
            <Image style= {styles.logoIcon} 
            source={{uri:`http://openweathermap.org/img/wn/${icon}.png`}} /> 
            <Text style={styles.currentTemp}>{temp} °F </Text>
        </View>
        <Text style={styles.description}t>{description}</Text>
        <View style={styles.extraInfo}>
            <View style={styles.info}>
                <Image style={smallIcon} source={require('./assets/humidity.png')} />
            </View>
        </View>
        </SafeAreaView>
  )
}

export default WeatherInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:15,
    },
    title: {
        fontSize: 26,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        color: '#e96e50',
    },
    logo: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    logoIcon: {
        width: 200,
        height: 200,
    },
    currentTemp: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
    },

})