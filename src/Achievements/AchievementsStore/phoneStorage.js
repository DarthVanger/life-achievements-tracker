import AsyncStorage from '@react-native-async-storage/async-storage';

const storageKey = 'achievements';

const saveAchievements = async (achievements) => {
  try {
    const jsonValue = JSON.stringify(achievements)
    await AsyncStorage.setItem(storageKey, jsonValue)
  } catch (e) {
    // TODO: notify user
  }
}

const getAchievements = async () => {
  try {
    const value = await AsyncStorage.getItem(storageKey)
    const jsonValue = JSON.parse(value)
    return jsonValue;
  } catch (e) {
    // TODO: notify user
  }
}

export { saveAchievements, getAchievements };
