import React, {useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
let QRCode = require('qrcode.react');

function Home(props){
  const [user, setUser] = useState(false);

  if (user) {
    return(
    <View style={styles.container}>
      <View style = {styles.button}>
        <Button color='#9a9a9a' title="Create Profile" onPress={() => props.navigation.navigate("CreateProfileScreen")}/>
      </View>
    </View>
  );
  }

  if (!user) {
    return(
        <View style={styles.container}>
          <QRCode value="http://" />
          <View style = {styles.button}>
            <Button color='#9a9a9a' title="Communcation Requests" onPress={() => props.navigation.navigate("CommunicationRequestsScreen")}/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#ffffff',
    padding: 8,
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


export default Home;