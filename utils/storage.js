import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveData(key, data) {
    try {
        const dataStored = await AsyncStorage.getItem(key);
        let dataToStore = [];
        if (dataStored == null) {
            try {
                dataToStore.push({
                    name: data.name,
                    url: "https://pokeapi.co/api/v2/pokemon/" + data.id + "/",
                });
                AsyncStorage.setItem(key, JSON.stringify(dataToStore));
            } catch (error) {
                console.log("No data & Store data error", error);
            }
        } else if (
            JSON.parse(dataStored).length < 6 &&
            !JSON.parse(dataStored).find((el) => el.name === data.name)
        ) {
            // Max 6 pokemon in the team
            try {
                dataToStore = JSON.parse(dataStored);
                console.log("debug", dataToStore);
                dataToStore.push({
                    name: data.name,
                    url: "https://pokeapi.co/api/v2/pokemon/" + data.id + "/",
                });
                console.log(dataStored);
                AsyncStorage.setItem(key, JSON.stringify(dataToStore));
            } catch (error) {
                console.log("Data & Store data error", error);
            }
        } else {
            console.log("Data already exist");
        }
    } catch (error) {
        console.log("Get stored data error before set", error);
    }
}

export async function fetchData(key, callback) {
    try {
        const fetch = await AsyncStorage.getItem(key);
        if (fetch != null) {
            const parse = JSON.parse(fetch);
            let data = [];
            parse.forEach((element) => {
                data.push(element);
            });
            callback(data);
        } else {
            callback([]);
        }
    } catch (error) {
        console.log("Get stored data error", error);
    }
    console.log("Fetch data done.");
}

export async function removeData(callback) {
    try {
        await AsyncStorage.removeItem("@team");
        callback([]);
    } catch (error) {
        console.log("Get remove data error", error);
    }
    console.log("Remove data done.");
}
