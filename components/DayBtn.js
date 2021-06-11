import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const DayBtn = ({ timeOfDay, changeTime }) => {
    const [time, setTime] = useState(`${timeOfDay}`)
    const handleOnPress = () => {
        console.log("handleOnPress", timeOfDay)
        changeTime()
    }

    return (
        <View>
            <TouchableOpacity
                style={styles.amBtn}
                onPress={handleOnPress}
            >
                <Text style={{ marginLeft: 10 }}>{timeOfDay}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    amBtn: {
        borderColor: 'red',
        color: 'red'
    },
    pmBtn: {
        borderColor: 'blue',
        color: 'blue'
    }
})

export default DayBtn
