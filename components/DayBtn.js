import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const DayBtn = ({ timeOfDay }) => {
    const [dayTime, setDayTime] = useState(`${timeOfDay}`)

    const handleOnPress = () => {
        if (dayTime === "AM") {
            setDayTime("PM")
        }

        if (dayTime === "PM") {
            setDayTime("AM")
        }
    }

    return (
        <View>
            <TouchableOpacity
                style={styles.amBtn}
                onPress={handleOnPress}
            >
                <Text style={{ marginLeft: 10 }}>{dayTime}</Text>
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
