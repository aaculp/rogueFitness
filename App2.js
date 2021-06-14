import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [nightTime, setNightTime] = useState("PM")
    const [dayTime, setDayTime] = useState("AM")
    const [errorMessage, setMessage] = useState("")
    const [totalPay, setTotalPay] = useState(0)

    const handleNightPress = () => nightTime === "PM" ? setNightTime("AM") : setNightTime("PM")
    const handleDayPress = () => dayTime === "AM" ? setDayTime("PM") : setDayTime("AM")

    const handleSubmit = () => {
        var start = JSON.parse(startTime)
        var end = JSON.parse(endTime)

        var am = [12, 1, 2, 3, 4]
        var pm = [5, 6, 7, 8, 9, 10, 11]

        // IF ONE TIME IS EMPTY
        if (start === null || end === null) {
            setMessage("Please enter both start / end time!")
        }
        // START TIME IS NOT IN PM HOURS
        else if (!pm.includes(start) && nightTime === "PM") {
            setMessage("You can only clock in after 5PM!")
        }
        // START TIME IS IN PM HOURS
        else if (pm.includes(start) && nightTime === "PM") {
            setMessage("Time card submitted!")
        }
        // IF START TIME IS NOT IN AM HOURS
        else if (!am.includes(start) && nightTime === "AM") {
            setMessage("You can only clock in after 5PM and before 4AM!")
        }
        // START TIME IS IN AM HOURS
        else if (am.includes(start) && nightTime === "AM") {
            setMessage("Time card submitted!")
        }
        // END TIME IS NOT IN PM HOURS
        else if (!pm.includes(end) && dayTime === "PM") {
            setMessage("Please check your hours, something seems off")
        }
        // END TIME IS IN PM HOURS
        else if (pm.includes(end) && dayTime === "PM") {
            setMessage("Time card submitted!")
        }
        // END TIME IS NOT IN AM HOURS
        else if (!am.includes(end) && dayTime === "AM") {
            setMessage("You can only work until 4AM!")
        }
        // END TIME IS IN AM HOURS
        else if (am.includes(end) && dayTime === "AM") {
            setMessage("Time card submitted!")
        }

        calculatePay(end, nightTime)
    }

    const calculatePay = (time, timeofday) => {
        console.log("inside calculate pay", time, timeofday)
    }

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <Text style={{ marginRight: 10, width: 75 }}>Clock In:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Start Time!"
                    value={startTime}
                    onChangeText={(startTime) => setStartTime(startTime)}
                    keyboardType="numeric"
                    accessibilityRole={"keyboardkey"}
                    maxLength={2}
                    returnKeyType={"done"}
                />
                <TouchableOpacity style={styles.button} onPress={handleNightPress}>
                    <Text style={{ color: 'red' }}>{nightTime}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <Text style={{ marginRight: 10, width: 75 }}>Clock out:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Start Time!"
                    value={endTime}
                    onChangeText={(endTime) => setEndTime(endTime)}
                    keyboardType="numeric"
                    accessibilityRole={"keyboardkey"}
                    maxLength={2}
                    returnKeyType={"done"}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleDayPress}
                >
                    <Text style={{ color: 'red' }}>{dayTime}</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ color: 'red', marginTop: 20 }}>{errorMessage}</Text>
            <Button title="Submit Timecard" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 300,
    },
    input: {
        height: 35,
        width: 150,
        borderWidth: 1,
        textAlign: 'center',
        marginRight: 20
    },
    button: {
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 1,
        color: 'red',
        padding: 5,
    },
    pmBtn: {
        borderColor: 'blue',
        color: 'blue'
    }
})

export default App;