import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [nightTime, setNightTime] = useState("PM")
  const [dayTime, setDayTime] = useState("AM")

  const handleNightPress = () => {
    if (nightTime === "PM") {
      setNightTime("AM")
    } else {
      setNightTime("PM")
    }
  }

  const handleDayPress = () => {
    if (dayTime === "AM") {
      setDayTime("PM")
    } else {
      setDayTime("AM")
    }
  }

  const handleSubmit = () => {
    console.log(startTime, endTime, nightTime, dayTime)
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
          keyboardType="number-pad"
          accessibilityRole={"keyboardkey"}
          maxLength={2}
          returnKeyType={"done"}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleNightPress}
        >
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
          keyboardType="number-pad"
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