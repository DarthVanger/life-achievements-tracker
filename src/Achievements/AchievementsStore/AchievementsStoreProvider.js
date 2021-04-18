import React, { createContext, useState, useEffect } from 'react';
import AchievementsContext from './AchievementsContext';
import guid from './guid';
import * as persistentStorage from './phoneStorage';

const initialAchievements = [
  {
    id: guid(),
    name: 'born',
    stars: 1,
  },
  {
    id: guid(),
    name: 'still alive',
    stars: 2,
  }
];

const AchievementsStoreProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    if (isLoaded) {
      persistentStorage.saveAchievements(achievements);
      console.log('Achievements saved to persistent storage')
    }
  }, [achievements]);

  useEffect(() => {
    (async () => {
      const persistedAchievements = await persistentStorage.getAchievements();
      console.log('Loaded achievements from persistent storage: ', persistedAchievements)

      setIsLoaded(true);

      if (persistedAchievements === null) {
        console.log('Saving initial achivements list');
        setAchievements(initialAchievements);
      } else {
        setAchievements(persistedAchievements);
      }
    })();
  }, []);

  return (
    <AchievementsContext.Provider value={{ achievements, setAchievements }}>
      {children}
    </AchievementsContext.Provider>
  );
};

export default AchievementsStoreProvider;
