import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstStep from './FirstStep'; // Replace with your component path
import SecondStep from './SecondStep'; // Replace with your component path

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstStep" component={FirstStep} />
        <Stack.Screen name="SecondStep" component={SecondStep} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
