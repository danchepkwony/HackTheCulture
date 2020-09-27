import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image} from 'react-native';
var QRCode = require('qrcode.react');
import logo from '../assets/communicaid.png';
import profile from '../assets/snack-icon.png';

function Home(props){
  const [user, setUser] = useState(false);

  if (!user) {
    return(
    <View style={styles.darkBackground}>
      <Image style={styles.largeLogo} source={logo} />
        <View style = {styles.button}>
          <Button color='#4E5356' title="Join the Conversation" onPress={() => props.navigation.navigate("CreateProfileScreen")}/>
        </View>
    </View>
  );
  }

  if (user) {
    return(
      <View style={styles.background}>
      <Image style={styles.logo} source={logo} />
        <View style={styles.container}>
          <Image style={styles.profile} source={profile}/>
          <Text style={styles.welcome}> Welcome Back! </Text>
          <QRCode value="http://facebook.github.io/react/" />
          <View style = {styles.button}>
            <Button color='#4E5356' title="Communcation Requests" onPress={() => props.navigation.navigate("CommunicationRequestsScreen")}/>
          </View>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  darkBackground: {
    height: '100vh',
    backgroundColor: '#121212',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    height: '100vh',
    backgroundColor: 'white'
  },
  logo: {
    height: '20%',
    width: '100%'
  },
  largeLogo: {
    height: '40%',
    width: '75%'
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
    backgroundColor: 'white',
    padding: 8,
    height: '90%'
  },
  button: {
    padding: 10,
    fontSize: 15,
    fontFamily: "arial",
    width: '70%',
    height: 40,
    textAlign: "center",
    margin: 20, 
    marginTop: 60
  },
  profile: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 30,
    marginBottom: 30,
  },
})


export default Home;