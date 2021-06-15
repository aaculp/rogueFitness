import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [nightTime, setNightTime] = useState("PM")
    const [dayTime, setDayTime] = useState("AM")
    const [errorMessage, setMessage] = useState("")
    const [totalPay, setTotalPay] = useState(0)

    let start = startTime !== "" ? start = JSON.parse(startTime) : start = startTime
    let end = endTime !== "" ? end = JSON.parse(endTime) : end = endTime

    // adding 12 to make it military time 
    let startShift = start >= 1 && start <= 4 ? startShift = start + 12 : startShift = start
    let endShift = end >= 1 && end <= 4 ? endShift = end + 12 : endShift = end

    let startPay;
    let endPay;

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

    const handleNightShift = (startShift, endShift, totalHours) => {
        // this function should only total up hours worked between 5 - 9PM
        let pay;
        if (startShift >= 9) {
            // started after 9 so DO NOTHING
            handleMidnightShift(startShift, endShift, totalPay)

        } else if (startShift < 9 && endShift > 9) {
            // they started before end of PAYRATE and ended in the next Payrate, calcu and run next function
            pay = (9 - startShift) * 12
            setTotalPay(pay)
            handleMidnightShift(startShift, endShift, pay)
        } else if (endShift <= 9) {
            // ENDSHIFT is less that 9, so calculate the totalhours worked and set that as totalPAY
            pay = totalHours * 12
            setTotalPay(pay)
        }
    }

    const handleMidnightShift = (startShift, endShift, additionalPay) => {
        // this function should only total up hours worked between 9 - 12AM
        let pay;
        if (startShift > 12) {
            //do nothing because were in the next paybracket
            handleMorningShift(startShift, endShift, totalHours)
        } else if (endShift < 13) {
            pay = ((Math.abs(9 - endShift)) * 8) + additionalPay
            setTotalPay(pay)
            handleMorningShift(startShift, endShift, additionalPay)
        } else if (endShift >= 13) {
            pay = ((endShift - startShift) * 8) + additionalPay
            // pay = ((Math.abs(17 - endShift)) * 16) + additionalPay
            setTotalPay(pay)
            handleMorningShift(startShift, endShift, additionalPay)
        }
    }

    const handleMorningShift = (startShift, endShift, additionalPay) => {
        // this function should only total up hours worked between 12 - 4AM)
        console.log("handleMorningShift", endShift)
        if (endShift < 13) {
            console.log("landed YOOOOOO", additionalPay)
        } else if (endShift >= 13 && endShift <= 16) {
            console.log("IM IN THIS SPOT HERE< YOU FOUND ME", additionalPay)
        }
    }

    const handleSubmit = () => {
        if (startShift > endShift) {
            setMessage("Hey, check your times, somethings wrong!")
        } else {
            let totalHours = Math.abs(endShift - startShift)
            handleNightShift(startShift, endShift, totalHours)
        }
        return totalPay
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

            <View>
                <Text>${JSON.stringify(totalPay)}</Text>
            </View>
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