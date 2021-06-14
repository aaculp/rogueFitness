import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [nightTime, setNightTime] = useState("PM")
    const [dayTime, setDayTime] = useState("AM")
    const [errorMessage, setMessage] = useState("")

    let start = JSON.parse(startTime)
    let end = JSON.parse(endTime)

    const handleStartTime = () => {
        if (start >= 5 && start <= 11) {
            setNightTime("PM")
            setMessage("")
        } else if (start >= 13) {
            setMessage("You can only clock in after 5PM")
        } else if (start === 0 || start === null) {
            setMessage("You can only clock in after 5PM")
        } else {
            setNightTime("AM")
            setMessage("")
        }
        return start
    }

    const handleEndTime = () => {
        if (end >= 5 && end <= 11) {
            setDayTime("PM")
            setMessage("")
        } else if (end >= 13) {
            setMessage("You can only work until 4AM")
        } else if (end === 0 || end === null) {
            setMessage("You can only work until 4AM")
        } else {
            setDayTime("AM")
            setMessage("")
        }
        return end
    }

    const handleSubmit = () => {
        let endShift = end > 1 && end < 4 ? endShift = end + 12 : endShift = end
        let totalHours = endShift - start

        console.log("totalHours", totalHours)
        // let nightShift = [5, 6, 7, 8]
        // let bedTimeShift = [9, 10, 11, 12]
        // let morningShift = [1`, 2, 3, 4]

        let startMorningPay = Math.abs((4 - start) * 16)
        let startNightPay = Math.abs((8 - start) * 12)
        let startBedPay = Math.abs((12 - start) * 8)

        if (start >= 1 && start <= 4) {
            console.log(1)
            console.log(startMorningPay)
        } else if (start >= 5 && start <= 8) {
            console.log(2)
            console.log(startNightPay)
        } else if (start <= 9 && start >= 12) {
            console.log(3)
            console.log(startNightPay + startBedPay)
        }
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
                    onBlur={handleStartTime}
                />
                <TouchableOpacity style={styles.button} onPress={() => console.log("pressed")}>
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
                    onBlur={handleEndTime}
                />
                <TouchableOpacity style={styles.button} onPress={() => console.log("pressed")}>
                    <Text style={{ color: 'red' }}>{dayTime}</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ color: 'red', marginTop: 20 }}>{errorMessage}</Text>
            <Button title="Submit Timecard" onPress={handleSubmit} />
        </View >
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