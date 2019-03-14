import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styledPrimitives from 'styled-components/primitives';
import styledNative from 'styled-components/native';

const Test = styledNative.View`
  background-color: ${props => props.theme.dark};
  height: 100;
  width: 100;
`;
const Test2 = styledPrimitives.View`
  background-color: ${props => props.theme.red};
  height: 100;
  width: 100;
`;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
  },
});

export default props => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to Next.js!</Text>
    <Test />
    <Test2 />
    <div>
      <p>Hello from styled-jsx</p>
      <style jsx>
        {//language=CSS
        `
          p {
            color: green;
          }
        `}
      </style>
    </div>
  </View>
);
