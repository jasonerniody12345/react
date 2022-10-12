import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import { Stack, Center, Input, NativeBaseProvider } from 'native-base'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
//  }

const Example = () => {
  return <Stack space={4} w="75%" maxW="300px" mx="auto">
      <Input size="xs" placeholder="xs Input" />
      <Input size="sm" placeholder="sm Input" />
      <Input size="md" placeholder="md Input" />
      <Input size="lg" placeholder="lg Input" />
      <Input size="xl" placeholder="xl Input" />
      <Input size="2xl" placeholder="2xl Input" />
    </Stack>;
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
          <Example />
      </Center>
    </NativeBaseProvider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

