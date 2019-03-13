import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styledPrimitives from 'styled-components/primitives';
import styledNative from 'styled-components/native/dist/styled-components.native.esm';

const Test = styledNative.View`
  background-color: red;
  height: 100px;
  width: 100px;
`;
const Test2 = styledPrimitives.View`
  background-color: blue;
  height: 100px;
  width: 100px;
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
