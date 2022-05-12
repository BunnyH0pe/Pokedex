import React, {useState, useEffect} from "react";
import { StyleSheet, Button, View, FlatList} from "react-native";
import {fetchData, removeData} from "../../utils/storage";
import PokemonItem from "../components/PokemonItem";
import {useIsFocused} from "@react-navigation/native";
import {Text} from "react-native";
import Home from "./Home";

const Team = ({ navigation }) => {
  const [team, setTeam] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    //Set up team from asyncStorage
    if (isFocused) {
      fetchData("@team", setTeam);
    }
  }, [isFocused]);

  const renderItem = ({ item }, navigation) => {
    return <PokemonItem item={item} navigation={navigation} />;
  };

  const clearTeam = async () => {
    //Clear the whole team
    removeData(setTeam);
  };

  const goToList = () => {
    //Going back to the pokemon list
    navigation.navigate(Home);
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>My best team</Text>
        {team.length > 0 ? (
            <View style={styles.container}>
              <FlatList
                  style={{ marginHorizontal: 4 }}
                  horizontal={false}
                  numColumns={2}
                  data={team}
                  extraData={team} //Use to re-render the FlatList
                  renderItem={(item) => renderItem(item, navigation)}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
              />

              <Button
                  color="red"
                  style={styles.clear}
                  onPress={() => clearTeam()}
                  title={"Clear"}
              />
            </View>
        ) : (
            <View style={styles.add}>
              <Button
                  color="blue"
                  onPress={() => goToList()}
                  title={"Add a pokemon"}
              />
            </View>
        )}
      </View>
  );
};

export default Team;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    color: 'white',
  },
  add: {
    flex: 1,
    justifyContent: "center",
  },
});
