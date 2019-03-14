import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider as NativeProvider } from 'styled-components/native';
import { ThemeProvider as PrimitivesProvider } from 'styled-components/primitives';

const theme = {
  dark: '#2a2e37',
  red: '#ea4844',
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <PrimitivesProvider theme={theme}>
          <NativeProvider theme={theme}>
            <Component {...pageProps} />
          </NativeProvider>
        </PrimitivesProvider>
      </Container>
    );
  }
}

export default MyApp;
