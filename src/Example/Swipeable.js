import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {SwipeablePanel} from 'rn-swipeable-panel';

const Swipeable = () => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,
  });
  const [isPanelActive, setIsPanelActive] = useState(true);

  return (
    <View style={{flex: 1}}>
      <Text>Welcome to React Native!</Text>
      <Text>To get started, edit App.js</Text>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <View>
          <Text>테스트 문구</Text>
        </View>
      </SwipeablePanel>
    </View>
  );
};

export default Swipeable;
