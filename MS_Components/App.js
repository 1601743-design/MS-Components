import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import your components
import ActivityIndicator2 from './Components/ActivityIndicator2';
import Button1 from './Components/Button1';
import Flatlist1 from './Components/Flatlist1';
import Image1 from './Components/Image1';
import Imagebackground1 from './Components/Imagebackground1';
import KeyboardAvoidingComponent from './Components/KeyboardAvoidingView';
import Modal1 from './Components/Modal1';
import Pressable1 from './Components/Pressable1';

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>React Native Component Examples</Text>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Activity Indicators</Text>
          <ActivityIndicator2 />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Buttons</Text>
          <Button1 />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>FlatList Example </Text>
          <Flatlist1 />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Image (Selectable)</Text>
          <Image1 />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Image Background Example </Text>
          <Imagebackground1 />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Keyboard Avoiding View Example</Text>
          <KeyboardAvoidingComponent />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Modal Example</Text>
          <Modal1 />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Pressable Example</Text>
          <Pressable1 />
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  section: {
    marginBottom: 40,
    width: '90%',
    alignItems: 'center',
  },
});
