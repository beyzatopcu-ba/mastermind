/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from "react-native";
import Home from "./src/Components/Home";

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#363431"/>
      <Home />
    </>
  );
};

export default App;
