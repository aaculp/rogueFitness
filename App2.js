import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [nightTime, setNightTime] = useState("PM")
    const [dayTime, setDayTime] = useState("AM")
    const [errorMessage, setMessage] = useState("")

    // let start = JSON.parse(startTime)
    // let end = JSON.parse(endTime)

    let start = startTime !== "" ? start = JSON.parse(startTime) : start = startTime
    let end = endTime !== "" ? end = JSON.parse(endTime) : end = endTime

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
        if (end < start) {
            setMessage("Hey, check your times, somethings wrong!")
        } else {
            let startShift = start >= 1 && start <= 4 ? startShift = start + 12 : startShift = start
            let endShift = end >= 1 && end <= 4 ? endShift = end + 12 : endShift = end
            let totalHours = Math.abs(endShift - startShift)

            console.log("totalHours", totalHours)
            // let nightShift = [5, 6, 7, 8]
            // let bedTimeShift = [9, 10, 11, 12]
            // let morningShift = [1`, 2, 3, 4]

            let startMorningPay = Math.abs((4 - start) * 16)
            let startNightPay = Math.abs((8 - start) * 12)
            let startBedPay = Math.abs((12 - start) * 8)

            let endMorningPay = Math.abs((4 - end) * 16)
            let endNightPay = Math.abs((8 - end) * 12)
            let endBedPay = Math.abs((12 - end) * 8)

            if (start >= 1 && start <= 4) {
                console.log("IF 1")
                console.log("startMorningPay", startMorningPay)
            } else if (start >= 5 && start <= 8) {
                console.log("IF 2")
                console.log("startNightPay", startNightPay)
            } else if (start <= 9 && start >= 12) {
                console.log("IF 3")
                console.log("startNightPay + startBedPay", startNightPay + startBedPay)
            }

            if (end >= 1 && end <= 4) {
                console.log("IF 4")
                console.log("endMorningPay", endMorningPay)
            } else if (end >= 5 && end <= 8) {
                console.log("IF 5")
                console.log("endNightPay", endNightPay)
            } else if (end <= 9 && end >= 12) {
                console.log("IF 6")
                console.log("endNightPay + endBedPay", endNightPay + endBedPay)
            }
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