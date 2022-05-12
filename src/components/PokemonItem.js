import {useEffect, useRef, useState} from "react";
import {View, Image, Pressable} from "react-native";
import {getPokemons} from "../../utils/PokeApi";
import {Text} from "react-native";
import {TypeColor} from "../../utils/typeColor"

const PokemonItem = ({item, navigation}) => {
    const [pokemonInfos, setPokemonInfos] = useState(null)

    useEffect(() => {
        getPokemons(item.url).then(response => setPokemonInfos(response.data))
        return() => {
            setPokemonInfos(null)
        }
    }, [])

    return (
            pokemonInfos !== null && pokemonInfos.sprites !== null ?
            <>
                <Pressable style={{backgroundColor: TypeColor(pokemonInfos.types[0].type.name), width: "48%", marginBottom: 20, padding: 10, borderRadius: 10}} onPress={() =>
                    {navigation.navigate('PokemonScreen', {
                        pokemon: pokemonInfos
                    });}
                }>
                    <View style={{alignItems:"center", flexDirection: "column"}}>
                        <Image
                            style={{width: 120, height: 120}}
                            source={{
                                uri: pokemonInfos.sprites.front_default,
                            }}
                        />
                        <Text style={{color: "white", fontSize:18, textTransform: "capitalize"}}>{item.name}</Text>
                    </View>
                </Pressable>
            </>
                :
                <>
                    <View style={{alignItems:"center", flexDirection: "column", backgroundColor: "#343434", width: "48%", marginBottom: 20, padding: 10, borderRadius: 10}}>
                        <View style={{width: 120, height: 120, backgroundColor: "#343434"}} />
                        <Text>Chargement...</Text>
                    </View>
                </>
    );
};

export default PokemonItem;