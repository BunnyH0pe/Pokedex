import {FlatList, StyleSheet, Text, View} from "react-native";
import PokemonItem from "../components/PokemonItem";
import {useEffect, useRef, useState} from "react";
import {getPokemons} from "../../utils/PokeApi";

const Home = ({navigation}) => {
    const [title, setTitle] = useState("Pokédex");
    const [pokemonList, setPokemonList] = useState([])
    const [pokemonNextUrl, setPokemonNextUrl] = useState(null)

    useEffect(() => {
        getPokemonFullList()
        return () => {
            setPokemonList([])
            setPokemonNextUrl(null)
        }
    }, [])

    const getPokemonFullList = (url) => {
        getPokemons(url).then(response =>{ response.data.results.map((pokemon, index) => {
            setPokemonList((previousList) => [...previousList, pokemon])})
            setPokemonNextUrl(response.data.next)})
    }

    return (
        <View style={styles.container}>
            {
                <>
                    <FlatList
                        contentContainerStyle={{ alignItems: "center", marginTop: 20 }}
                        horizontal={false}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: "space-between" }}
                        data={pokemonList}
                        extraData={pokemonList} // use to re-render the FlatList
                        renderItem={({ item }) => <PokemonItem item={item} navigation={navigation}/>}
                        keyExtractor={(item, index) => index.toString()}
                        onEndReachedThreshold={0.5} // Run onEndReached at this threshold
                        onEndReached={() => {
                            // Load next page
                            if (pokemonNextUrl != null) {
                                getPokemonFullList(pokemonNextUrl);
                            }
                        }}
                    />

                </>
            }
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
});