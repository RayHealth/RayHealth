import AsyncStorage from "@react-native-community/async-storage";
import {ById} from "@reduxShared/utils/byIdUtils";

class AsyncStorageHelper {
    static setItem = async (key: string, value: string | undefined): Promise<boolean> => {
        try {
            if (value) {
                await AsyncStorage.setItem(key, value);
            } else {
                await AsyncStorage.removeItem(key);
            }
            return true;
        } catch (error) {
            console.log(`Error setting item in AsyncStorage: ${key} => ${value}`);
            return false;
        }
    };

    static getItem = async (key: string): Promise<string> => {
        let value = "";
        try {
            value = (await AsyncStorage.getItem(key)) || "";
        } catch (error) {
            console.log(`Error retrieving item in AsyncStorage: ${value}`);
        }
        return value;
    };

    static removeItem = async (key: string): Promise<boolean> => {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (error) {
            console.log(`Error removing item in AsyncStorage: ${key}`);
            return false;
        }
    };

    static multiGet = async <K extends string[]>(keys: K): Promise<ById<string>> => {
        const results: ById<string> = {};
        try {
            await AsyncStorage.multiGet(keys, (err, stores) => {
                if (stores) {
                    stores.forEach((result) => {
                        if (result && result[1]) {
                            results[result[0]] = result[1];
                        }
                    });
                } else if (err) {
                    console.log(`Error ... AsyncStorage: ${keys}`);
                }
            });
        } catch (error) {
            console.log(`Error getting items in AsyncStorage: ${keys}`);
        }
        return results;
    };
}

export default AsyncStorageHelper;
