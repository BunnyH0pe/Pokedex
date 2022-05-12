import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Home from "../pages/Home";
import PokemonDetails from "../pages/PokemonDetails";
import Team from "../pages/Team";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Search from "../pages/Search";
import Option from "../pages/Option"


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PokemonStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="PokemonScreen" component={PokemonDetails} />
        </Stack.Navigator>
    )
}

export default function Navigation() {

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{headerShown: false , tabBarIcon : ({}) => {return <Icon name='home' size={30} color='black' />}}} name="Home" component={PokemonStack}  />
                <Tab.Screen options={{title: "Recherche", tabBarIcon : ({}) => {return <Icon name='magnify' size={30} color='black' />}}}  name="Search" component={Search}/>
                <Tab.Screen options={{title: "Team", tabBarIcon : ({}) => {return <Icon name='pokeball' size={30} color='black' />}}}  name="Team" component={Team}/>
                <Tab.Screen options={{title: "Options", tabBarIcon : ({}) => {return <Icon name='cog' size={30} color='black' />}}}  name="Option" component={Option}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}