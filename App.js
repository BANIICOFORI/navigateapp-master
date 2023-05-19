 import { StyleSheet, Text, View } from 'react-native';
import NavigationContainer from './src/Navigations/NavigationContaines';
import { Provider } from 'react-redux';
import Store from "./src/Redux/Store";


export default function App() {
  return (
    <Provider store={Store}>
    <View style={styles.container}>
      <NavigationContainer />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:4,
    backgroundColor: '#fff',
   // alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:1
  },
});
