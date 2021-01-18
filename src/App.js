import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {withTranslation} from 'react-i18next';
import i18next from './config/lang/i18n';

const App = () => {
  return <Text>{i18next.t('hello')}</Text>;
};

export default withTranslation()(App);
