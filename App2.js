import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [nightTime, setNightTime] = useState("PM")
    const [dayTime, setDayTime] = useState("AM")
    const [errorMessage, setMessage] = useState("")

    const eveningPay = 12;
    const nightPay = 8;
    const earlyMorningPay = 16;

    // let start = JSON.parse(startTime)
    // let end = JSON.parse(endTime)
    // have to parse because its returned as a string
    let start = startTime !== "" ? start = JSON.parse(startTime) : start = startTime
    let end = endTime !== "" ? end = JSON.parse(endTime) : end = endTime

    // adding 12 to make it military time 
    let startShift = start >= 1 && start <= 4 ? startShift = start + 12 : startShift = start
    let endShift = end >= 1 && end <= 4 ? endShift = end + 12 : endShift = end


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
    }

    const checkStartTime = (startShift) => {
        let startPay;
        if (startShift <= 8) {
            startPay = (8 - startShift) * 12
        } else if (startShift >= 9 && startShift <= 12) {
            startPay = (12 - startShift) * 8
        } else if (startShift >= 13 && startShift <= 15) {
            startPay = (15 - startShift) * 16
        }

        console.log(startPay)
    }

    const checkEndTime = (endShift) => {
        let endPay;
        if (endShift <= 8) {
            endPay = (8 - endShift) * 12
        } else if (endShift >= 9 && endShift <= 12) {
            endPay = (12 - endShift) * 8
        } else if (endShift >= 13 && endShift <= 15) {
            endPay = (15 - endShift) * 16
        }

        console.log(endPay)
    }

    const handleSubmit = () => {
        if (startShift > endShift) {
            setMessage("Hey, check your times, somethings wrong!")
        } else {
            let totalHours = Math.abs(endShift - startShift)
            console.log("totalHours", totalHours)

            checkStartTime(startShift, endShift)
            checkEndTime(startShift, endShift)
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
                    onChange={(startTime) => setStartTime(startTime)}
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
                    onChange={(endTime) => setEndTime(endTime)}
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