import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function JournalScreen() {
  const [entry, setEntry] = useState('');
  const [savedEntries, setSavedEntries] = useState([]);

  const handleSave = () => {
    if (entry.trim()) {
      setSavedEntries([...savedEntries, { text: entry, date: new Date().toLocaleString() }]);
      setEntry('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metaphysical Journal</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your thoughts..."
        multiline
        value={entry}
        onChangeText={setEntry}
      />
      <Button title="Save Entry" onPress={handleSave} />
      <ScrollView style={styles.entries}>
        {savedEntries.map((e, index) => (
          <View key={index} style={styles.entry}>
            <Text style={styles.date}>{e.date}</Text>
            <Text>{e.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f0f0f8' },
  title: { fontSize: 24, marginBottom: 12, fontWeight: 'bold', textAlign: 'center' },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, height: 120, marginBottom: 12, backgroundColor: 'white', borderRadius: 6, textAlignVertical: 'top' },
  entries: { marginTop: 16 },
  entry: { padding: 10, marginBottom: 10, backgroundColor: '#fff', borderRadius: 6, borderColor: '#ddd', borderWidth: 1 },
  date: { fontSize: 12, color: '#666', marginBottom: 4 },
});
