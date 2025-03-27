import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { saveData, loadData } from '../utils/storage';
import { defaultProfile } from '../utils/profile';

export default function ProfileScreen() {
  const [profile, setProfile] = useState(defaultProfile);

  useEffect(() => {
    loadData('userProfile').then((data) => {
      if (data) setProfile(data);
    });
  }, []);

  const handleChange = (key, value) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    await saveData('userProfile', profile);
    Alert.alert('Saved', 'Your profile has been updated.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={profile.name}
        onChangeText={(text) => handleChange('name', text)}
      />

      <Text style={styles.label}>Gender (Male or Female)</Text>
      <TextInput
        style={styles.input}
        value={profile.gender}
        onChangeText={(text) => handleChange('gender', text)}
      />

      <Text style={styles.label}>Birth Date (YYYY-MM-DD)</Text>
      <TextInput
        style={styles.input}
        value={profile.birthDate}
        onChangeText={(text) => handleChange('birthDate', text)}
      />

      <Text style={styles.label}>Birth Time (HH:mm)</Text>
      <TextInput
        style={styles.input}
        value={profile.birthTime}
        onChangeText={(text) => handleChange('birthTime', text)}
      />

      <Text style={styles.label}>Birth Location</Text>
      <TextInput
        style={styles.input}
        value={profile.birthLocation}
        onChangeText={(text) => handleChange('birthLocation', text)}
      />

      <Button title="Save Profile" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f8',
  },
  label: {
    marginTop: 12,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
});
