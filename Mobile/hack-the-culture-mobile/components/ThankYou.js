import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import logo from '../assets/communicaid.png';

function ThankYou(props){
  return(
    <View style={styles.background}>
    <Image style={styles.logo} source={logo} />
    <View style={styles.container}>
    <Text style={styles.thankyou}> Thank you! </Text>
    <Text style={styles.text}> Your profile has been saved. You will receive an email with further instructions on how to receive your QR band. In the meantime, you can use the QR code on the home screen! </Text>
      <View style = {styles.button}>
        <Button color='#9a9a9a' title="Done" onPress={() => props.navigation.navigate("HomeScreen")}/>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100vh',
    backgroundColor: 'white'
  },
  logo: {
    height: '17.5%',
    width: '100%'
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  thankyou: {
    width: '80%',
    textAlign: 'center',
    fontFamily: 'arial',
    fontSize: 30,
    paddingBottom: 10,
    fontWeight: 'bolder',
  },
  text: {
    width: '80%',
    textAlign: 'center',
    color: '#000000',
    paddingBottom: 30,
    fontFamily: 'arial',
    fontSize: 20,
  },
  button: {
    padding: 10,
    fontSize: 15,
    fontFamily: "arial",
    width: '70%',
    height: 40,
    textAlign: "center",
    margin: 20
  },
})

export default ThankYou;