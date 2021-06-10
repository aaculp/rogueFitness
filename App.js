
import React from 'react';

const App = () => {

  return (
    <View style={styles.container}>
      <Text>Hey im app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default App;
