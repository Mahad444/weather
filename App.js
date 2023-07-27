
import { StyleSheet, View } from 'react-native';
import Wearther from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <Wearther />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
