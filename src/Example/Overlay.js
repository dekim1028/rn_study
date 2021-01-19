// Webview Overlay 예제

import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';

const Overlay = () => {
  const [visible, setVisible] = useState(true);

  const hideSpinner = () => {
    setVisible(false);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <WebView
          onLoad={() => hideSpinner()}
          style={{flex: 1}}
          source={{uri: 'https://www.naver.com/'}}
        />
        {visible && (
          <View style={styles.overlay}>
            <Text style={styles.text}>Loading...</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Overlay;
