import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text className="text-red-400">Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
