import React, {useReducer} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text testID="counter" style={styles.counter}>
          {`Counter: ${count}`}
        </Text>
        <TouchableOpacity
          testID="increment"
          style={styles.buttons}
          onPress={() => {
            dispatch('INCREMENT');
          }}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="decrement"
          style={styles.buttons}
          onPress={() => {
            dispatch('DECREMENT');
          }}>
          <Text>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="reset"
          style={styles.buttons}
          onPress={() => {
            dispatch('RESET');
          }}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#abcede',
    paddingLeft: 15,
    paddingRight: 15,
  },
  counter: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    fontSize: 30,
  },
});

export default App;
