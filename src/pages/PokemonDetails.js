import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import {useEffect, useRef, useState} from "react";
import ProgressBar from 'react-native-progress/Bar';
import {TypeColor} from "../../utils/typeColor";
import {StatColor} from "../../utils/StatColor";
import AddTeamButton from "../components/AddToTeamButton";

const PokemonDetails = ({ route }) => {
    const { pokemon } = route.params;

    return (
        <View style={styles.container}>
            {
                <>
                    <View style={{backgroundColor: TypeColor(pokemon.types[0].type.name), flexDirection: 'column', alignItems: 'center', width: "100%", borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                        <AddTeamButton pokemon={pokemon} style={styles.pressableButton}/>
                        <Image
                            style={{width: 150, height: 150}}
                            source={{
                                uri: pokemon.sprites.front_default,
                            }}
                        />
                        <Text style={{color: "white", padding: 10, fontSize:22, textTransform: "capitalize"}}>#{ pokemon.id } {pokemon.name}</Text>
                    </View>
                    <View style={{display:"flex", flexDirection: "row", justifyContent: "space-around", alignItems: 'center', width: "100%"}}>
                        {
                            pokemon.types.map((type, index) => {
                                return <Text key={index} style={{color: "white",backgroundColor: TypeColor(type.type.name) , borderRadius:50, paddingTop: 10, paddingRight:15, paddingLeft:15, paddingBottom:10, fontSize:18, marginTop: 15, width: "35%", textAlign:"center", textTransform: "capitalize"}}>{type.type.name}</Text>
                            })
                        }
                    </View>
                    <View style={{display:"flex", flexDirection: "row", justifyContent: "space-around", alignItems: 'center', width: "100%"}}>
                        <View style={{display:"flex", flexDirection: "column", alignItems: 'center', width: "40%"}}>
                            <Text style={{color: "white", paddingRight:15, paddingLeft:15, fontSize:12, marginTop: 15, textAlign:"center"}}>Weight :</Text>
                            <Text style={{color: "white", paddingRight:15, paddingLeft:15, paddingBottom:10, fontSize:18, textAlign:"center"}}>{pokemon.weight / 10} kg</Text>
                        </View>
                        <View style={{display:"flex", flexDirection: "column", alignItems: 'center', width: "40%"}}>
                            <Text style={{color: "white", paddingRight:15, paddingLeft:15, fontSize:12, marginTop: 15, textAlign:"center"}}>Height :</Text>
                            <Text style={{color: "white", paddingRight:15, paddingLeft:15, paddingBottom:10, fontSize:18, textAlign:"center"}}>{pokemon.height / 10} m</Text>
                        </View>
                    </View>
                    <View style={{display:"flex", flexDirection: "column", justifyContent: "space-around", alignItems: 'center', width: "100%"}}>
                        {
                            pokemon.stats.map((stat, index) => {
                                return(
                                    <View key={index} style={{display:"flex", flexDirection: "column", alignItems:"stretch", width: "80%", marginBottom:10}}>
                                        <Text style={{color: "white", textTransform: "uppercase",}}>{stat.stat.name} :</Text>
                                        <ProgressBar progress={stat.base_stat/100} width={null} height={18} color={StatColor(stat.stat.name)}><Text style={stat.base_stat >= 100 ? { position: "absolute", top:-2, right:2, fontSize:15, color:"black"} : { position: "absolute", top:-2, right:2, fontSize:15, color:"white"}}>{stat.base_stat}</Text></ProgressBar>
                                    </View>
                                )
                            })
                        }
                    </View>
                </>
            }
        </View>
    );
};

export default PokemonDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        alignItems: 'center',
        width: "100%"
    },
    pressableButton: {
        position: "absolute",
        top: 10,
        right:10,
    }
});