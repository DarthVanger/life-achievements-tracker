import AsyncStorage from '@react-native-async-storage/async-storage';

const storageKey = 'achievements';

const saveAchievements = async (achievements) => {
  const jsonValue = JSON.stringify(achievements)
  await AsyncStorage.setItem(storageKey, jsonValue)
}

const getAchievements = async () => {
  const value = await AsyncStorage.getItem(storageKey)
  const jsonValue = JSON.parse(value)
  return jsonValue;
}

export { saveAchievements, getAchievements };
