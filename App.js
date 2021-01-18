import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Animated, TouchableOpacity} from 'react-native';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [x, setX] = useState(new Animated.Value(600));

  const start = () => {
    if (!visible) {
      Animated.timing(x, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(x, {
        toValue: 600,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }

    setVisible(!visible);
  };

  useEffect(() => {
    setInterval(() => {
      for (let i = 0; i < 1000; i++) {
        console.log('JS thread is busy.');
      }
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => start()}>
        <Text style={styles.textBtn}>Start</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          transform: [{translateX: x}],
          height: 250,
          width: 200,
          margin: 5,
          borderRadius: 12,
          backgroundColor: '#347a2a',
          justifyContent: 'center',
        }}>
        <Text style={styles.text}>Fade </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {},
  btn: {
    backgroundColor: '#480032',
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: 'center',
    borderRadius: 6,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item1: {
    backgroundColor: 'red',
    padding: 20,
    width: 100,
    margin: 10,
  },

  textBtn: {
    color: '#f4f4f4',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
