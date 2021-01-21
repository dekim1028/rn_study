import React, {useState} from 'react';
import {
  Animated,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {
  PanGestureHandler,
  ScrollView,
  TextInput,
} from 'react-native-gesture-handler';

const GestureHandler = () => {
  const [originY, setOriginY] = useState(0);
  const [showInput, setShowInput] = useState(true);

  const onScrollEndDrag = (e) => {
    setOriginY(e.nativeEvent.contentOffset.y);
    setShowInput(e.nativeEvent.contentOffset.y >= originY ? false : true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{...styles.inputBox, display: showInput ? 'flex' : 'none'}}>
        <TextInput />
      </View>
      <ScrollView style={styles.scrollView} onScrollEndDrag={onScrollEndDrag}>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    borderWidth: 1,
  },
  scrollView: {
    height: '100%',
  },
  text: {
    fontSize: 100,
  },
});
export default GestureHandler;
