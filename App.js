import React from "react";


import {
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


import {
  Text,
  Container, // kind of bigger version of View in react-native
  Button,
  H1, H3,

} from 'native-base'

const App = () => {
  return(
    <>
      <View>
        <Text style={styles.text}>Hello...!</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default App;