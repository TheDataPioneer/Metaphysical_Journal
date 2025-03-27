import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { loadData } from '../utils/storage';
import { getKuaNumber } from '../utils/kua';

export default function DashboardScreen() {
  const [profile, setProfile] = useState(null);
  const [kua, setKua] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await loadData('userProfile');
        console.log('Profile loaded:', data);

        if (data) {
          const kuaNum = getKuaNumber(data.birthDate, data.gender);
          console.log('Kua result:', kuaNum);

          setProfile(data);
          setKua(kuaNum);
        }
      } catch (err) {
        console.error('Error loading profile or Kua:', err);
      }
    }

    fetchProfile();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      {profile ? (
        <>
          <Text style={styles.label}>Welcome, {profile.name || 'User'}!</Text>
          <Text style={styles.label}>Your Kua Number: {kua?.number || 'Not available'}</Text>
          <Text style={styles.label}>Trigram: {kua?.name}</Text>
          <Text style={styles.label}>Group: {kua?.group}</Text>
          <Text style={styles.label}>
            Favorable Directions: {kua?.favorableDirections?.join(', ')}
          </Text>
          <Text style={styles.label}>Energy: {kua?.energy}</Text>
        </>
      ) : (
        <Text>Loading profile...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
  },
});
