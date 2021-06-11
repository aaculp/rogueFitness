import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [startTime, setStartTime] = useState(null)

  const handleStartTime = (startTime) => {
    setStartTime(startTime)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={{ marginRight: 10 }}>Clock In:</Text>
        <TextInput
          style={styles.input}
          placeholder="Start Time!"
          keyboardType="number-pad"
          value={startTime}
          onChangeText={handleStartTime}
        />
        <Text style={{ marginLeft: 10 }}>PM</Text>
      </View>
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
    width: 350
  },
  input: {
    height: 25,
    width: 150,
    borderWidth: 1,
  }
})

export default App;