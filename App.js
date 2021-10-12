import React, {useState} from "react";

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
  Header,
  Body,
  Card,
  Content,
  
} from 'native-base'

import Icons from './components/Icons';
import Snackbar from "react-native-snackbar";


const itemsArray = new Array(9).fill('empty');



const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  // handler methods
  const changeItem = (itemNumber) => {

  };

  const reloadGame = () => {

  };

  const checkIsWinner = () => {

  };


  return(
      <Container style={{backgroundColor: "333945", padding: 5}}>
        <Header>
          <Body>
            <Title>
              My TicTacToe Game
            </Title>
          </Body>
        </Header>
        <Icons name="pencil"></Icons>
      </Container>
  );
};


const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20
  },
  box: {
    width: "33%",
    marginBottom: 6
  },
  card: {
    height: 120,
    justifyContent: "center",
    alignItems: "center"
  },
  message: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#FFF",
    marginTop: 20,
    backgroundColor: "#4652B3",
    paddingVertical: 10
  }

});


export default App;