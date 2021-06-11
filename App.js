import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import DayBtn from './components/DayBtn'

const App = () => {
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)

  const handleStartTime = (startTime) => {
    setStartTime(startTime)
  }

  const handleOnPress = () => {
    console.log(startTime)
    console.log(endTime)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={{ marginRight: 10, width: 75 }}>Clock In:</Text>
        <TextInput
          style={styles.input}
          placeholder="Start Time!"
          keyboardType="number-pad"
          value={startTime}
          onChangeText={handleStartTime}
        />
        <DayBtn timeOfDay={"PM"} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={{ marginRight: 10, width: 75 }}>Clock out:</Text>
        <TextInput
          style={styles.input}
          placeholder="Start Time!"
          keyboardType="number-pad"
          value={endTime}
          onChangeText={(endTime) => setEndTime(endTime)}
        />
        <DayBtn timeOfDay={"AM"} />
      </View>

      <Button title="Submit Timecard" onPress={handleOnPress} />
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
  }
})

export default App;