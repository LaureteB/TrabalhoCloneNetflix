import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import FilmeScreen from "./src/screens/FilmeScreen";
import AdicionarScreen from "./src/screens/AdicionarScreen";
import EditarScreen from "./src/screens/EditarScreen";

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Lista de Filmes",

            headerBackVisible: false,

            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Adicionar")
                }
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 19,
                  backgroundColor: "#E50914",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Detalhes"
          component={FilmeScreen}
          options={({ navigation }) => ({
            title: "Detalhes",

            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Home")
                }
              >
                <Text
                  style={{
                    fontSize: 24,
                  }}
                >
                  🏠
                </Text>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Adicionar"
          component={AdicionarScreen}
          options={({ navigation }) => ({
            title: "Adicionar Filme",

            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Home")
                }
              >
                <Text
                  style={{
                    fontSize: 24,
                  }}
                >
                  🏠
                </Text>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Editar"
          component={EditarScreen}
          options={({ navigation }) => ({
            title: "Editar Filme",

            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Home")
                }
              >
                <Text
                  style={{
                    fontSize: 24,
                  }}
                >
                  🏠
                </Text>
              </TouchableOpacity>
            ),
          })}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );

}