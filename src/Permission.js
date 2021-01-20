import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, BackHandler, Alert} from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  request,
  check,
  openSettings,
} from 'react-native-permissions';
import RNExitApp from 'react-native-exit-app';

const Permission = () => {
  const [cameraGranted, setCameraGranted] = useState(false);

  const handleCameraPermission = async () => {
    try {
      const device =
        Platform.OS === 'ios' ? PERMISSIONS.IOS : PERMISSIONS.ANDROID;

      const res = await check(device.CAMERA);

      if (res === RESULTS.GRANTED) {
        setCameraGranted(true);
      } else if (res === RESULTS.DENIED) {
        await request(device.CAMERA, {
          title: 'Buyaladdin',
          message: '앱을 실행하려면 퍼미션을 허가하셔야합니다.',
          buttonNegative: 'cancel',
        }).then((res) => {
          if (res === RESULTS.DENIED) {
            RNExitApp.exitApp();
          } else if (res === RESULTS.BLOCKED) {
            openSettingAlert();
          }
        });
      } else {
        openSettingAlert();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const openSettingAlert = () => {
    Alert.alert(
      'Buyaladdin',
      "퍼미션 거부 + Don't ask again(다시 묻지 않음) 체크 박스를 설정한 경우로 설정에서 퍼미션 허가해야합니다.",
      [
        {
          text: 'Cancel',
          onPress: () => RNExitApp.exitApp(),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => openSettings()},
      ],
      {cancelable: false},
    );
  };

  useEffect(() => {
    handleCameraPermission();
  }, []);

  return (
    <SafeAreaView>
      {cameraGranted ? (
        <Text>카메라 권한부여 성공</Text>
      ) : (
        <View>
          <Text>카메라 권한허용 필요</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Permission;
