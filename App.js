import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuInicial from "./src/app/MenuInicial";
import DetalhesProduto from "./src/app/DetalhesProduto";
import Categoria from "./src/app/categoria";
import TelaLogin from "./src/app/TelaLogin";
import CarrinhoCompras from "./src/app/CarrinhoCompras";
import Checkout from "./src/app/Checkout";
import Suporte from "./src/app/Suporte";

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="TelaLogin">
      <Stack.Screen name="TelaLogin" component={TelaLogin} options={{ title: 'Login' }}/>

      <Stack.Screen name="MenuInicial" component={MenuInicial} 
        options={{title: 'vinhedo virtual', headerStyle: {backgroundColor: '#D3D3D3', borderBottomWidth: 2, borderBottomColor: '#000'}, headerTitleStyle: {textTransform: 'uppercase'}, 
      }}/>

      <Stack.Screen name="DetalhesProduto" component={DetalhesProduto}
        options={({ route }) => ({title: 'Detalhes do produto', headerStyle: {backgroundColor: '#D3D3D3', borderBottomWidth: 2, borderBottomColor: '#000'}, headerTitleStyle: {textTransform: 'uppercase'},
        })}
        
      />
      <Stack.Screen name="Categoria" component={Categoria} 
        options={{title: 'filtro avançado', headerStyle: {backgroundColor: '#D3D3D3', borderBottomWidth: 2, borderBottomColor: '#000'}, headerTitleStyle: {textTransform: 'uppercase'}, 

      }}/>

      <Stack.Screen name="CarrinhoCompras" component={CarrinhoCompras} 
        options={{title: 'Carrinho de compras', headerStyle: {backgroundColor: '#D3D3D3', borderBottomWidth: 2, borderBottomColor: '#000'}, headerTitleStyle: {textTransform: 'uppercase'}, 
      }}/>

      <Stack.Screen name="Checkout" component={Checkout} 
        options={{title: 'Checkout', headerStyle: {backgroundColor: '#D3D3D3', borderBottomWidth: 2, borderBottomColor: '#000'}, headerTitleStyle: {textTransform: 'uppercase'}, 
      }}/>

      <Stack.Screen name="Suporte" component={Suporte} 
        options={{title: 'Suporte', headerStyle: {backgroundColor: '#D3D3D3', borderBottomWidth: 2, borderBottomColor: '#000'}, headerTitleStyle: {textTransform: 'uppercase'}, 
      }}/>

    </Stack.Navigator>
  </NavigationContainer>

  );
}

export default App;


