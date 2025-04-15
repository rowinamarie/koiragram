// navigoinnissa käytettävä komponentti
import { Text, View } from 'react-native';
import tyylit from '../styles/componentStyles'

export default function HomeScreen() {
  return (
    <View style={tyylit.container}>
      <Text>Welcome to our App!</Text>

    </View>
  );
}