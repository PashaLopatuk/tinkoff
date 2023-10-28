import { LogBox, StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './app/providers/AuthProvider';
import Navigation from './app/navigation/Navigation';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json'
import { DataProvider } from './app/providers/DataProvider';
import StoryContainer from './app/components/screens/home/stories/StoryContainer';


export default function App() {
  return (
    // <View style={styles.container}>

    <AuthProvider>
      <TailwindProvider utilities={utilities}>
        <DataProvider>
          <StoryContainer />

          <Navigation />

        </DataProvider>
      </TailwindProvider>
    </AuthProvider>

    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 1,
//     flex: 1,
//     backgroundColor: '#fff',
//     color: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

LogBox.ignoreAllLogs()