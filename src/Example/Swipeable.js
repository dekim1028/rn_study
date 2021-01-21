import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {SwipeablePanel} from 'rn-swipeable-panel';

const Swipeable = () => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,
  });
  const [isPanelActive, setIsPanelActive] = useState(true);
  const [type, setType] = useState(0);

  const getStatus = (status) => {
    setType(status);
  };

  return (
    <View style={{flex: 1}}>
      <Text>Welcome to React Native!</Text>
      <Text>To get started, edit App.js</Text>
      <SwipeablePanel
        {...panelProps}
        isActive={isPanelActive}
        getStatus={getStatus}>
        {type === 1 && (
          <View>
            <Text>SMALL</Text>
          </View>
        )}
        {type === 2 && (
          <View>
            <Text>LARGE</Text>
          </View>
        )}
        {type === 3 && (
          <View>
            <Text>HIDDEN</Text>
          </View>
        )}
      </SwipeablePanel>
    </View>
  );
};

export default Swipeable;
