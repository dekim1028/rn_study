import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

function App() {
  const [visible, setVisible] = useState(false);
  const x = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    /*return {
      transform: [
        {
          translateX: withTiming(x.value, {
            duration: 1000,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          }),
        },
      ],
    };*/
    return {
      width: withTiming(x.value, {
        duration: 1000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  const onPress = () => {
    if (!visible) {
      x.value = 0;
    } else {
      x.value = 300;
    }
    setVisible(!visible);
  };

  return (
    <View>
      <Animated.View style={[styles.box, style]} />
      <Button onPress={() => onPress()} title="Hey" />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
  button: {
    height: 50,
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
