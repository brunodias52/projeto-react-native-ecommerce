import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsList from './screens/ProductsList';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import {CartIcon} from './components/CartIcon';
import {CartProvider} from './contexts/CartContext';
import Preload from './src/Pages/Preload';
import Login from './src/Pages/Login';
import Cadastro from './src/Pages/Cadastro';
import UserContextProvider from "./contexts/UserContext";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <UserContextProvider>
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Products list screen Navigation */}
          

          <Stack.Screen 
          name="Login" 
          component={Login}
          />
          <Stack.Screen 
          name="Preload" 
          component={Preload}
          />
          

          <Stack.Screen 
          name="Cadastro" 
          component={Cadastro}
          />

          
            <Stack.Screen
            name="Home"
            component={ProductsList}
            options={({navigation}) => ({
              title: 'Lista de Produtos',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />  

          

          {/* Product Detail screen Navigation */}
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={({navigation}) => ({
              title: 'Detalhes do Produto',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          
          {/* Shopping cart screen Navigation */}
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={({navigation}) => ({
              title: 'Carrinho',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
    </UserContextProvider>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});

export default App;
