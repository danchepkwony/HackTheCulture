import React, {useState} from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TextInput, Button, Dimensions  } from 'react-native';

function CreateProfile(props) {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [password, setPassword] = useState([]);
  const [error, setError] = useState([]);

  function CreateProfileAndReroute(){
      props.navigation.navigate("ThankYouScreen");
  }

  return (
    <ScrollView style={styles.container}>
      
          <Text style={styles.text}> First Name </Text>
          <TextInput style={styles.input} value={firstName} onChangeText={firstName => setFirstName(firstName)} />

          <Text style={styles.text}> Last Name </Text>
          <TextInput style={styles.input} value={lastName} onChangeText={lastName => setFirstName(lastName)}  />

          <Text style={styles.text}> Email </Text>
          <TextInput style={styles.input} value={lastName} onChangeText={lastName => setFirstName(lastName)}  />

          <Text style={styles.errorText} >
          {error}
          </Text>

          <View style={styles.button}>
            <Button color="#9a9a9a" title="Save" onPress={CreateProfileAndReroute}/>
          </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingTop: 40,
    padding: 36,
    height: Dimensions.get('window').height,
    width:  Dimensions.get('window').width,
  },
  text: {
    width: '100%',
    textAlign: 'left',
    color: '#000000',
    paddingBottom: 7.5,
    fontFamily: 'arial',
    fontSize: 12,
  },
  input: {
    width: '100%',
    borderColor: '#f4f3f3',
    borderWidth: '1px',
    height: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,
    marginBottom: '10%',
  },
  button: {
    padding: '5%',
    fontSize: 15,
    fontFamily: 'arial',
    width: '100%',
    textAlign: 'center',
  },
  errorText: {
    paddingTop: 15,
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'arial',
    color: '#D21404'
  }
});

export default CreateProfile;