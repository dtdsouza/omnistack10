import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync,getCurrentPositionAsync } from 'expo-location'

const main = () => {
    const [ curretRegion, setCurrentRegion ] = useState(null) 

    useEffect(() => {
        const loadInitialPosition = async () => {
            const { granted } = await requestPermissionsAsync()

            if(granted){
                const {coords: { latitude, longitude }} = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                })

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                })
            }
        }
        loadInitialPosition()
    },[])

    if(!curretRegion) return null

    return (
        <MapView initialRegion={curretRegion} style={styles.map}>
            <Marker coordinate={{ latitude: -31.758789, longitude: -52.3457947 }}>
                <Image style={styles.avatar} source={{uri: 'https://avatars2.githubusercontent.com/u/37113459?s=400&u=19c6e04df4dbfe04e642a0f7fcc318d965c49873&v=4'}}/>
                <Callout>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Daniel Teixeira de Souza</Text>
                        <Text style={styles.devBio}>Computer Engineering student.</Text>
                        <Text style={styles.devTec}>Node.js</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff'
    },
    callout: {
        width: 260
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    devBio: {
        color: '#666',
        marginTop: 5
    },
    devTec: {
        marginTop: 5
    }
})

export default main