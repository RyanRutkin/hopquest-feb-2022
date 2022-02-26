import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Amplify from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { AppHomePage } from './src/pages/Home/Home.page';

Amplify.configure(awsconfig)

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppHomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
