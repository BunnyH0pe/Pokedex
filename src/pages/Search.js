import React, {useState, useEffect} from "react";
import {TextInput, StyleSheet, Button, View} from "react-native";
import {getPokemons} from "../../utils/PokeApi";

const Search = ({ navigation }) => {
    const [pokemonName, onChangePokemonName] = useState("");
    const [pokemon, setPokemon] = useState(null);
    
    function searchPokemon() {
        getPokemons(`https://pokeapi.co/api/v2/pokemon/` + pokemonName.toLowerCase().trimEnd())
            .then(response =>{ setPokemon(response.data) })
            .catch( err => console.log(err))
    }

    useEffect(() => {
        if (pokemon !== null && pokemon !== undefined) {
            navigation.navigate('PokemonScreen', {
                pokemon: pokemon
            });
        }
    }, [pokemon])

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangePokemonName}
                value={pokemonName}
                placeholder="Ex. Charizard"
            />
            <Button
                style={styles.button}
                color="red"
                title="Chercher un pokemon !"
                onPress={() => searchPokemon()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "100%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button:{
        color: "#841584"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: "center",
        alignItems:'center',
        width: "80%"
    }
});

export default Search;